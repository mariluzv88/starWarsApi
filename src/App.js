import React from "react";
import { useEffect,useState,useContext } from "react";
import {Route,Routes} from 'react-router-dom'
import Main from "./pages/Main";
import Nav from "./components/Nav";
import axios from 'axios'
import './style.css'
import Container from "./pages/Container";
import { AppContext } from "./context/App_context";






function App() {
   
    let {getInfo} = useContext(AppContext)
      useEffect(() => {
        getInfo();
      }, []);
  
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/container"element={<Container />}/>
           </Routes>
    </div>
  )
}

export default App