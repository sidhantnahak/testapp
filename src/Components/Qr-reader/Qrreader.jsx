import React, { useState } from 'react'
import ReadQR from './ReadQR'
import CreateQR from './CreateQR'

const Qrreader = () => {

  return (
    <>

      <div className='container p-2 text-center'>
        <h1 className='text-2xl text-semibold'>QR CODE READER GENERATOR</h1>

        <div className='grid sm:grid-cols-2 mt-10 border-2 border-black'>
          <CreateQR />
          <ReadQR />

        </div>


      </div>

    </>
  )
}

export default Qrreader