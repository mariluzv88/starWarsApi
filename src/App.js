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
import { AppContext } from "./context/App_context";






function App() {
    // const getInfo = async () => {
    //     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    //     const info = response.data.results;
    //     console.log(info);
    //     setUrl(info)
    //   };
    let {getInfo} = useContext(AppContext)
      useEffect(() => {
        getInfo();
      }, []);
    //   const [url, setUrl] = useState(null);
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/electric"element={<Electric />}/>
            <Route path="/psychic"element={<Psychic />}/>
            <Route path="/fire"element={<Fire />}/>
            <Route path="/water"element={<Water />}/>
            <Route path="/grass"element={<Grass />}/>
            
            
           
        </Routes>
    </div>
  )
}

export default App