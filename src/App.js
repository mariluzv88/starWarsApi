import React from "react";
import { useEffect,useState,useContext } from "react";
import {Route,Routes} from 'react-router-dom'
import Main from "./pages/Main";
import Nav from "./components/Nav";
import axios from 'axios'



function App() {

  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route />
            <Route />
           
        </Routes>
    </div>
  )
}

export default App