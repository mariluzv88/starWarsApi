import {useContext,useEffect} from 'react'
import { AppContext } from '../context/App_context';

function Starship() {
  let {getStars} = useContext(AppContext)
  let {url}= useContext(AppContext)
  useEffect(() => {
    getStars();
  }, []);
  const loaded = () => {
    return (
      <div>
            {url? url.map((card)=>{
            return (
             
                  <h1>{card.name} {card.model}</h1>
              
            )
           }):<p>Loading</p>}
           {/* <h1>{url.name}</h1>  */}
           
      </div>
    )
  }
  const loading = () => {
      return <h1>Loading...</h1>;
    };
  
   
    return url ? loaded() : loading();
  }

export default Starship