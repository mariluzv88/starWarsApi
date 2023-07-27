import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/App_context'


function Cards(props) {
    // let {getInfo} = useContext(AppContext)
    let {url} = useContext(AppContext)
    // useEffect(() => {
    //     getInfo();
    //   }, []);
  return (
    <div>
          {url? url.map((card)=>{
          return (
           
                <h1>{card.name}</h1>
            
          )
         }):<p>Loading</p>}
         {/* <h1>hi{url.name}</h1>  */}
    </div>
  )
}

export default Cards