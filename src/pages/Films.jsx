import {useContext,useEffect} from 'react'
import Cards from '../components/Cards';
import { AppContext } from '../context/App_context';

function Films() {
  let {getFilms} = useContext(AppContext)
  let {url} = useContext(AppContext)
  useEffect(() => {
    getFilms();
  }, []);
  
    
    const loaded = () => {
  return (
    <div>
          {url? url.map((card)=>{
          return (
           
                <h1>{card.title}</h1>
            
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


export default Films