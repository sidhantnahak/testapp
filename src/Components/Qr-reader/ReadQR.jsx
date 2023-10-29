import React, { useState } from 'react'
import { useRef } from 'react';
import QrScanner from 'qr-scanner'

const ReadQR = () => {
  const [File, setFile] = useState();
  const [data, setdata] = useState()
  const fileref = useRef()
  let handleScan = () => {

    fileref.current.click()

  };
  const onchangeHandler=async(e)=>{
    const file=e.target.files[0];
    console.log(file)
    setFile(file);
    const result=await QrScanner.scanImage(file,{returnDetailedScanResult:true});
    setdata(result.data)

  }

  return (
    <>
      <div className='text-center'>
        <p className='my-2 font-semibold'>Read QR Code</p>
        <button onClick={handleScan} className=' my-2 px-3 py-2 bg-green-700 text-white text-sm rounded hover:bg-green-900'>Scan QR Code</button>
        <input type="file" ref={fileref} onChange={onchangeHandler} accept='.png, .jpg, .jpeg' className='hidden' />

        <div className='my-2' >
          {File && <img src={URL.createObjectURL(File)} alt='QR-code'className='mx-auto'/>}
          {data && <p>data : {data}</p>}
          
        </div>
      </div>
    </>
  )
}

export default ReadQR