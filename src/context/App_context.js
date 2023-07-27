import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()

  

const AppContextProvider = (props) => {
    const getInfo = async () => {
        const response = await axios.get("https://swapi.dev/api/people/");
        const info = response.data.results;
        console.log(info);
        setUrl(info)
      };
    
      const [url, setUrl] = useState(null);
    
    return(<AppContext.Provider value={{
        getInfo,url,setUrl
    }}>
        {props.children}

    </AppContext.Provider>
)
}
export default AppContextProvider