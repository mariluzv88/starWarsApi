import {useContext,useEffect} from 'react'
import Cards from '../components/Cards'
import { AppContext } from '../context/App_context';


function Characters() {
  let {getPeeps} = useContext(AppContext)
  useEffect(() => {
    getPeeps();
  }, []);
  return (
    <div>
        <Cards/>
    </div>
  )
}

export default Characters