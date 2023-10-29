import React, { useEffect, useState } from 'react'

const CheckAndDelete = () => {

    const [data, setdata] = useState(["Reading Book", "Playing Cricket", "Singing Song"]);
    // const deleteIndex=(index)=>{
    //     setdata((d)=>[
    //         ...data.slice(0,index),
    //         ...data.slice(index+1)
    //     ])
    // }

    const deleteIndex = (index) => {
        let newarr = data.filter((e, i) => {
            return i != index
        })
        setdata(newarr)
    }

    const handleEvent = (e) => {

        let elem = e.target.parentElement;
        if (e.target.checked) {
            // elem.lastElementChild.classList.remove("hidden")
            elem.lastElementChild.style.display="inline"

        } else {
            // elem.lastElementChild.classList.add("hidden")
            elem.lastElementChild.style.display="none"
        }

    }
    useEffect(() => {


    }, [data])


    return (
        <div className='text-center'>
            {data && data.length > 0 ?
                data.map((e, i) => {
                    return (
                        <div key={i}>
                            <input type="checkbox" id={i} onClick={(e) => handleEvent(e)} />
                            <label htmlFor={i}>{e} </label>

                            <input style={{display:"none"}} type='button' onClick={() => deleteIndex(i)} value=" X" />

                        </div>
                    )
                })
                :
                <h2>Data Not Found</h2>
            }

        </div>
    )
}

export default CheckAndDelete