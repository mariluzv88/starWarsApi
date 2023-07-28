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
          <div className='shipContainer'>
            {url? url.map((card)=>{
            return (
                <div className='ship'>
                  <h3 ><h3 className='title'>Name:</h3>{card.name} <h3 className='title'>Model:</h3>  {card.model}</h3>
                  <h4 > <h3 className='title'>Manufacturer:</h3>{card.manufacturer}</h4>
                  <div className='statsContainer'>
                        <div className='stats'><h4><h3 className='title'>Cost in Credits:</h3>{card.cost_in_credits}<h4 className='title'>Length:</h4> {card.length} </h4></div>
                        <div className='stats'> <h4><h4 className='title'>Max Speed: </h4>{card.max_atmosphering_speed} </h4><h4 className='title'>Rations: </h4><h4>{card.max_atmosphering_speed} </h4> </div>
                        <div className='stats'><h4><h4 className='title'>Passengers: </h4> {card.passengers} <h4 className='title'>Cargo Capacity:</h4>{card.cargo_capacity}</h4></div>
                        <div className='stats'><h3><h3 className='title'>Crew:</h3>{card.crew}</h3></div>
                    </div>
                </div>
            )
          }):<p>Loading</p>}
           {/* <h1>{url.name}</h1>  */}
          </div>
           
           
      </div>
    )
  }
  const loading = () => {
      return <h1>Loading...</h1>;
    };
  
   
    return url ? loaded() : loading();
  }

export default Vehicles