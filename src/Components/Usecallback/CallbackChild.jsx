import React, { memo, useEffect } from 'react'

const CallbackChild = ({ Todos, make_todo }) => {

console.log("child component")

    
    return (
        <>
        <h1>I'm UsecallbackChild component</h1>
            {
               Todos.map((val, index) =>
                   {return <h5 key={index}>{index} {val}</h5>}
                )
            }
        <button onClick={make_todo}>AddTodo</button>

        </>
    )
}

export default memo(CallbackChild) 