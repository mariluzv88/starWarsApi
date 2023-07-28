import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()

  

const AppContextProvider = (props) => {
    const getPeeps = async () => {
        const response = await axios.get("https://swapi.dev/api/people");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
   
    const getPlanets = async () => {
        const response = await axios.get("https://swapi.dev/api/planets");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
    const getFilms = async () => {
        const response = await axios.get("https://swapi.dev/api/films");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
    const getSpecies = async () => {
        const response = await axios.get("https://swapi.dev/api/species");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
    const getCars = async () => {
        const response = await axios.get("https://swapi.dev/api/vehicles");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
    const getStars = async () => {
        const response = await axios.get("https://swapi.dev/api/starships");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
    
      const [url, setUrl] = useState(null);
    
    return(<AppContext.Provider value={{
        getPeeps,url,setUrl,getPlanets,getFilms,getSpecies,getCars,getStars
    }}>
        {props.children}

    </AppContext.Provider>
)
}
export default AppContextProvider