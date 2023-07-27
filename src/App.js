import React from "react";
import { useEffect,useState,useContext } from "react";
import {Route,Routes} from 'react-router-dom'
import Main from "./pages/Main";
import Nav from "./components/Nav";
import axios from 'axios'



function App() {
    const getInfo = async () => {
        const response = await axios.get("https://swapi.dev/api/");
        const info = response.data;
        console.log(info);
      };
      useEffect(() => {
        getInfo();
      }, []);
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