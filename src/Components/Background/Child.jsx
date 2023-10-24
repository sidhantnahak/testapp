import React, { memo } from 'react'

const Child = (props) => {
    const {color} =props
    console.log("inside child")
  return (
    <div>
        <input style={{height:"35px",width:"300px",outline:"none",border:"2px solid black",padding:"0.5rem",fontSize:"1.5rem"}} type="text" onChange={(e)=>color(e.target.value)} />

    </div>
  )
}

export default memo(Child)