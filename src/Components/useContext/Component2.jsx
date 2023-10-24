import React, { useContext } from 'react'
import Component3 from './Component3'
import { usecontext } from './Component1'

// const Component2 = ({user}) => {
//   return (
//     <div>
       
// <h1>I'm Component2</h1>
// <Component3 user={user}/>

//     </div>
//   )
// }

const Component2 = ({setdata}) => {
  const x=useContext(usecontext);
    return (
      <div>
         
  <h1>I'm Component2 and count is {x.name} and {x.age}</h1>

  <input type="text" onChange={(e)=>{
    setdata((data)=>{
      return {...data,name:e.target.value}
    })
  }} />
  
  
      </div>
    )
  }

export default Component2