import React, { useState } from 'react'
import QRcode from 'qrcode'

const CreateQR = () => {
    const [qrDisplay, setQrDisplay] = useState(false)
    const [qrvalue, setqrvalue] = useState("");
    const [qrimgurl, setqrimgurl] = useState("")

    const onsubmitHandler = async (e) => {
        e.preventDefault()
        if (!qrvalue) {
            return alert("Enter a value to generate qr code")
        }
        setQrDisplay(true)
        const resdata = await QRcode.toDataURL(qrvalue)
        if (resdata) setqrimgurl(resdata)
        console.log(typeof resdata)
    }
    return (
        <div>
            <form onSubmit={onsubmitHandler} className='p-2  max-w-[600px]'>
                <input value={qrvalue} onChange={(e) => setqrvalue(e.target.value)} className='w-[60%] outline-none px-2 py-1 border-[3px] boder-black focus:border-[3px] focus:border-[skyblue] divide-solid' type="text" placeholder='Enter Data Here' required />
                <button type='submit' className='px-2 py-1 bg-[skyblue] ml-3'>Generate QR</button>
            </form>

            <div className={`${qrDisplay ? "block" : "hidden"} text-center`}>

                <img src={qrimgurl} alt="QR Not Found" />


            </div>

        </div>
    )
}

export default CreateQR