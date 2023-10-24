import logo from './logo.svg';
import './App.css';
import HigherOrder from './Components/Higher Order Cmpt/HigherOrder';
import { createContext, useRef, useState } from 'react';
import { useEffect } from 'react';
import Usecallback from './Components/Usecallback/Usecallback';
import Usememo from './Components/Usememo/Usememo';
import Component1 from './Components/useContext/Component1';
import Component3 from './Components/useContext/Component3';
import Background from './Components/Background/Background';
import UseMemo from './Components/UseMemo2/UseMemo';
import UseRef1 from './Components/UseRef/UseRef1';
import UserReducer from './Components/UseReducer/UserReducer';
import Inc_Dec from './Components/UseReducer/Inc_Dec';
import Test from './Components/Test/Test';
import Sidebar from './Components/Sidebar/Sidebar';
// import  userContext from './Components/useContext/Context'
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom'
import Main from './Components/Sidebar/Main';
import Content from './Components/Sidebar/Content';
import Home from './Components/Sidebar/Home';

export const userContext = createContext();
export default function App() {
  const [user, setuser] = useState("sidhant")
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        {/* <Routes> */}
          {/* <div div className='App'> */}
          {/* <h1 >Wel to My React Test App </h1> */}


          {/* <HigherOrder  /> */}

          {/* <Usecallback/> */}
          {/* <Usememo/> */}
          {/* <Component1 user={user}/> */}
          {/* <Component1 /> */}
          {/*
      <userContext.Provider value={user}>
        <Component3 />
      </userContext.Provider> */}

          {/* <Background/> */}

          {/* <UseMemo/> */}
          {/* <UseRef1/> */}
          {/* <UserReducer/> */}
          {/* <Inc_Dec/> */}
          {/* <Test/> */}

          {/* <Route path='/' element={<Sidebar child={<Home/>} />} />
          <Route path='/contents' element={<Sidebar child={<Content/>} />} /> */}
         
        {/* </Routes>*/}
      </BrowserRouter> 
    </>
  );
}



