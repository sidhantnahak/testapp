import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [arr, setarr] = useState([]);
    const [count, setCount] = useState(1)

    const addeleem = () => {
        setarr((prev) => [...prev, "Element"]);
    }
    const increment = () => {
        setCount((c) => c + 1);
    }
   const elem=useMemo(()=>calculate(count),[count])
    return (
        <>
            <h1>Calculate Count is {count}</h1>
            <h1>Expansive calculation is {elem}</h1>
            {arr.length > 0 ?
                arr.map((elem, index) => {
                    return <p>{index + 1} {elem}</p>
                }) : <h1>Data Not Found</h1>
            }

            <button onClick={addeleem}> Add Element</button>
            <br />
            <button onClick={increment}> Calculate Count</button>

        </>
    )
}
const calculate = (val) => {

    for (let i = 0; i < 1000000000; i++) {
        val += 1;
    }
    return val


}
export default UseMemo