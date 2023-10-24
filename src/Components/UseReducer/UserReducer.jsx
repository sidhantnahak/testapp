import React, { useReducer } from 'react'

const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

  
  const reducer=(state,action)=>{
    switch (action.type){
        case "complete":
            return state.map(e=>{
                    if(e.id===action.id){
                        return {...e,complete:!e.complete}
                    }else{
                        return e;
                    }
                })
                
       default :
          return state;    
            
    }
    

  }

const UserReducer = () => {


    const [todos,dispatch]=useReducer(reducer,initialTodos)
    const handleclick=(e)=>{
        dispatch({type:"complete",id:e.id})

    }
  return (
    <>
    <div style={{margin:"2rem 0"}}>
        {todos.map(e=>{
           return <input type="checkbox" checked={e.complete} style={{height:"40px",width:"40px",margin:"0 1rem"}} onClick={()=>handleclick(e)} />
        })}
    </div>

    </>
  )
}

export default UserReducer