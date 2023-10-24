import React, { useEffect, useRef, useState } from 'react'

const UseRef1 = () => {
    const [inputvalue, setInputvalue] = useState("")
    const ref=useRef("");
    const ref1=useRef(1);
    useEffect(() => {
    ref1.current=ref1.current+1;
     
    })
    
  return (
    <>
    <h1>UseRef Hook Example</h1>
<h2>Component Rendered {ref1.current } Times</h2>
      <h2>Input value is {inputvalue}</h2>
      <h2>Preveious State is {ref.current}</h2>
      <input onChange={(e)=>{setInputvalue(e.target.value);ref.current=inputvalue;}} type="text" style={{margin:"1rem 0",width:"250px",height:'30px',fontSize:"1.5rem",outline:"none",border:"2px solid black"}} />
    </>
  )
}

export default UseRef1