import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild';

const Usecallback = () => {
    console.log("callback component")

    const [count, setCount] = useState(0)
    const [Todos, setTodos] = useState([]);

    // const make_todo = () => {
    //     setTodos((prev) => [...prev, "Element"])
    // }

    const count_increment = () => {
        setCount(count + 1);
    }

    const make_todo = useCallback(() => {
        setTodos((prev) => [...prev, "Element"])
    }, [Todos])


    return (


        <>
            <CallbackChild Todos={Todos} make_todo={make_todo} />

            <h1>I'm Usecallback function</h1>
            <h2>Count is {count}</h2>
            <button onClick={count_increment}>Addcnt</button>


        </>

    )
}

export default Usecallback