import React from "react";
import { useEffect,useState,useContext } from "react";
import {Route,Routes} from 'react-router-dom'
import axios from 'axios'
import { AppContext } from "./context/App_context";
import './style.css'
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Characters from "./pages/Characters";
import Planets from "./pages/Planets";
import Films from "./pages/Films";
import Species from "./pages/Species";
import Vehicles from "./pages/Vehicles";
import Starship from "./pages/Starship";






function App() {
   
    // let {getInfo} = useContext(AppContext)
    //   useEffect(() => {
    //     getInfo();
    //   }, []);
  
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/characters"element={<Characters />}/>
            <Route path="/planets"element={<Planets />}/>
            <Route path="/films"element={<Films />}/>
            <Route path="/species"element={<Species />}/>
            <Route path="/vehicles"element={<Vehicles />}/>
            <Route path="/starship"element={<Starship />}/>
           </Routes>
    </div>
  )
}

export default App