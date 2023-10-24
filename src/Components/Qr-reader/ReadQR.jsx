import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader';

const ReadQR = () => {
    const [result, setResult] = useState("No result");
    const data="NOne";
    let handleScan = (data) => {
      if (data) {
        setResult(data);
      }
    };
  
    let handleError = err => {
      // alert(err);
    };
  return (
    <>
<p>Read Qr</p>
<hr />
<h1>fdsfsff</h1>
 </>
  )
}

export default ReadQR