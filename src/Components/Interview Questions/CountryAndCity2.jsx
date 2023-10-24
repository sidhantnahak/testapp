import React, { useEffect, useState } from 'react'

const countries=[
    {name:"India",value:"IN",cities:["Delhi","Mumbai"]},
    {name:"Pakistan",value:"PK",cities:["Lahore","Karachi"]},
    {name:"Bangladesh",value:"BG",cities:["Dhaka","Chittagong"]}

]

const CountryAndCity2 = () => {
    const [country, setCountry] = useState(0)
    const [city, setCity] = useState(countries[country].cities[0])
    console.log(country,city)
    useEffect(()=>{
setCity(countries[country].cities[0])
    },[country])
  return (
    <>
    <div>
        <select value={country} onChange={(e)=>setCountry(e.target.value)} >
            {countries.map((e,i)=>{
                return <option key={i} value={i}>{e.name}</option>

            })}
        </select>


        <select value={city} name="" id="" onChange={(e)=>setCity(e.target.value)}>
            {
                countries[country].cities.map((e,i)=>{
                    return <option key={i} value={e}>{e}</option>
                })
            }

        </select>
    </div>
    </>
  )
}

export default CountryAndCity2