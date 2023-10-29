import React from 'react'
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import Picharts from './Charts/Picharts'
import UpdateObject from './StateUpdate/UpdateObject'
import SearchFunction from '../Search/SearchFunction'
import UseMemo2 from '../Usememo/UseMemo2'
import Qrreader from '../Qr-reader/Qrreader'
import CountryAndCity from '../Interview Questions/CountryAndCity'
import CountryAndCity2 from '../Interview Questions/CountryAndCity2'
import CheckAndDelete from '../Interview Questions/CheckAndDelete'

const Main = () => {

    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contents' element={<Content/>}/>
            <Route path='/pichart' element={<Picharts/>}/>
            <Route path='/object-update' element={<UpdateObject/>}/>
            <Route path='/search-functionality' element={<SearchFunction/>}/>
            <Route path='/memo-hook' element={<UseMemo2/>}/>
            <Route path='/qr-reader' element={<Qrreader/>}/>
            {/* <Route path='/country-city' element={<CountryAndCity/>}/> */}
            <Route path='/country-city' element={<CountryAndCity2/>}/>
            <Route path='/check-delete' element={<CheckAndDelete/>}/>

        </Routes>        
        </>

    )
}

export default Main