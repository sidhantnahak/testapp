import React, { useState } from 'react'
import QRcode from 'qrcode'

const CreateQR = () => {
    const [qrDisplay, setQrDisplay] = useState(false)
    const [qrvalue, setqrvalue] = useState("");
    const [qrimgurl, setqrimgurl] = useState("")

    const onsubmitHandler = async (e) => {
        e.preventDefault()

        try {
            if (!qrvalue) {
                return alert("Enter a value to generate qr code")
            }
            setQrDisplay(true)
            const resdata = await QRcode.toDataURL(qrvalue)
            if (resdata) setqrimgurl(resdata)
        } catch (error) {
            alert(error)
        }


    }
    return (
        <div className='text-center'>
            <h3 className='my-2 font-semibold'>Create QR Code</h3>
            <form onSubmit={onsubmitHandler} className='p-2  max-w-[600px] text-center'>
                <input value={qrvalue} onChange={(e) => setqrvalue(e.target.value)} className='w-[60%] outline-none px-2 py-1 border-[3px] boder-black focus:border-[3px] focus:border-[skyblue]' type="text" placeholder='Enter Data Here' required />
                <button type='submit' className=' my-2 px-2 py-1 bg-[skyblue] ml-3'>Generate QR</button>
            </form>

            <div className={`${qrDisplay ? "block" : "hidden"} `}>
                <a href={qrimgurl} download="qr.png">
                    <img className='mx-auto' src={qrimgurl} alt="QR Not Found" />
                </a>


            </div>

        </div>
    )
}

export default CreateQR