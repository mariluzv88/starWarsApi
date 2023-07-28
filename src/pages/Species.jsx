import {useContext,useEffect} from 'react'
import Cards from '../components/Cards';
import { AppContext } from '../context/App_context';

function Species() {
  let {getSpecies} = useContext(AppContext)
  let {url}= useContext(AppContext)
  useEffect(() => {
    getSpecies();
  }, []);
  const loaded = () => {
    return (
      <div>
            {url? url.map((card)=>{
            return (
             
                  <h1>{card.name}</h1>
              
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
  
export default Species
