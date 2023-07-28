import {useContext,useEffect} from 'react'
import { AppContext } from '../context/App_context';

function Vehicles() {
  let {getCars} = useContext(AppContext)
  let {url}= useContext(AppContext)
  useEffect(() => {
    getCars();
  }, []);
  const loaded = () => {
    return (
      <div>
            {url? url.map((card)=>{
            return (
             
                  <h1>{card.name} {card.model}</h1>
              
            )
           }):<p>Loading</p>}
           
           
      </div>
    )
  }
  const loading = () => {
      return <h1>Loading...</h1>;
    };
  
   
    return url ? loaded() : loading();
  }

export default Vehicles