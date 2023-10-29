import React, { useEffect, useState } from 'react'
const data=[
    {country:"India",code:"IN",cities:["Delhi","Odisha"]},
    {country:"Pakistan",code:"PAK",cities:["Karachi","Lahore"]},
    {country:"United State",code:"UN",cities:["city1","city2"]},
]
const CountryAndCity = () => {
    const [country, setCountry] = useState(data);
    const [countryval, setCountryval] = useState(0)
    const [city, setCity] = useState()
    useEffect(() => {
      setCity(country[countryval].cities[0])
    }, [countryval])
    
  return (

    <div>
        <select value={countryval}  onChange={(e)=>{setCountryval( e.target.value)} } name="country" id="country">
             {
                
            country.map((e,i)=>{
                return(<option key={i} value={i}>{e.country}</option> )
            })
        }
        </select>

        <select value={city} onChange={(e)=>{setCity(e.target.value)}} name="" id="">
            {
                country[countryval].cities.map((e,i)=>{
                    return (<option key={i} value={e} >{e} </option>)
                })
            }
        </select>
       


    </div>

  )
}

export default CountryAndCity