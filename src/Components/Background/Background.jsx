import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Child from './Child'

const Background = () => {

    const [color, setColor] = useState("white")
    const [cnt, setcnt] = useState(1)
    
    console.log("inside background")


    return (
        <>
        <h1>{cnt}</h1>

            <div style={{ background: `${color}`, height: "300px", width: "400px", margin: "2rem auto", border: "2px solid black" }}>

            </div>
            <Child color={setColor}  />

            <h1><button onClick={()=>setcnt(cnt+1)}>COUNT</button></h1>
        </>

    )
}

export default Background