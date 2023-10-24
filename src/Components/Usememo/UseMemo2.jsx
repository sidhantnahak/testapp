import React, { useMemo, useState } from 'react'

const UseMemo2 = () => {
    const [todos, settodos] = useState([]);
    const [count, setcount] = useState(1);
    const [i, seti] = useState(1);

    const get_val=useMemo(()=>{
    var actual=get_count(count)
     return actual
    },[count])
    return (

        <div className='text-center'>
            <h1>Count : {get_val}</h1>

            {todos && todos.length >= 0 ? todos.map(e => {
                return <li> {e}</li>
            }) : <h2>Not Founud</h2>}
            <button className='border-2 border-black px-2 py-1 mx-2' onClick={() => {
                settodos([...todos, `Data${i}`]);
                seti(v => v + 1)
            }}
            >Add Todo</button>
            <button className='border-2 border-black px-2 py-1 mx-2' onClick={() => setcount(c => c + 1)}>Increase Count</button>
        </div>



    )
}
function get_count(a) {
    let val = 0;
    for (let i = 1; i < 1000000000; i++) {
        val = i;
    }
    val += a;
    return val;
}
export default UseMemo2