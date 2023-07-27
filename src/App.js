import React from "react";
import { useEffect,useState,useContext } from "react";
import {Route,Routes} from 'react-router-dom'
import Main from "./pages/Main";
import Nav from "./components/Nav";
import axios from 'axios'
import './style.css'
import Fire from "./pages/Fire";
import Grass from "./pages/Grass";
import Psychic from "./pages/Psychic";
import Electric from "./pages/Electric";
import Water from "./pages/Water";






function App() {
    const getInfo = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
      useEffect(() => {
        getInfo();
      }, []);
      const [url, setUrl] = useState(null);
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/electric"element={<Electric url={url}/>}/>
            <Route path="/psychic"element={<Psychic url={url}/>}/>
            <Route path="/fire"element={<Fire url={url}/>}/>
            <Route path="/water"element={<Water url={url}/>}/>
            <Route path="/grass"element={<Grass url={url}/>}/>
            
            
           
        </Routes>
    </div>
  )
}

export default App