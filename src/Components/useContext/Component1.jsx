import React, { useContext, useState } from 'react'
import Component2 from './Component2'
import { createContext } from 'react';

// const Component1 = ({user}) => {
   
//   return (
//     <div>
//         <h1>I'm Component 1</h1>
//         <Component2 user={user}/>
//     </div>
//   )
// }
export const usecontext=createContext();

const Component1 = () => {
  const [data,setdata]=useState({name:"sidhant",age:23})
 
   
    return (
      <>
      <usecontext.Provider value={data}>
      <div>
          <h1>I'm Component 1</h1>
          <Component2 setdata={setdata}/>
      </div>
      </usecontext.Provider>
      </>
    )
  }

export default Component1