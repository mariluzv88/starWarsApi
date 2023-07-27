import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()

  

const AppContextProvider = (props) => {
    const getInfo = async () => {
        const response = await axios.get("https://swapi.dev/api/people");
        const info = response.data;
        console.log(info);
      };
      useEffect(() => {
        getInfo();
      }, []);
      const [url, setUrl] = useState("https://swapi.dev/api/people");
    
    return(<AppContext.Provider value={{
        getInfo,url,setUrl
    }}>
        {props.children}

    </AppContext.Provider>
)
}
export default AppContextProvider