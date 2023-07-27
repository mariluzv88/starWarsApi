import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()

  

const AppContextProvider = (props) => {
    const getInfo = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        // starwars api https://swapi.dev/api/people/
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
    //   useEffect(() => {
    //     getInfo();
    //   }, []);
      const [url, setUrl] = useState(null);
    
    return(<AppContext.Provider value={{
        getInfo,url,setUrl
    }}>
        {props.children}

    </AppContext.Provider>
)
}
export default AppContextProvider