import React, { useReducer } from 'react'


 let    value=0;


const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return state+action.payload
        case "decrement":
            return state-action.payload    
        default:
            return state   
    }
}

const Inc_Dec = () => {

    const[originaldata,dispatch]=useReducer(reducer,value);

   
  return (
  <>
<div style={{margin:"1.5rem 0",display:"flex",justifyContent:"center"}}>


  <input onClick={()=>dispatch({type:"decrement",payload:1})}style={{fontSize:"2rem",width:"40px",height:"30px"}} type="button" value="-"/><input type="text" style={{margin:"0 1rem",width:"70px",height:"30px",border:"2px solid black",outline:"none",pointerEvents:"none",fontSize:"2rem",textAlign:"center"}} value={originaldata}  /> <input type="button" value="+" style={{fontSize:"2rem",width:"40px",height:"30px"}} onClick={()=>dispatch({type:"increment",payload:2})} />
 </div>
  </>
  )
}

export default Inc_Dec