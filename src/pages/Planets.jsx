import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/App_context";

function Planets() {
  let { getPlanets } = useContext(AppContext);
  let { url } = useContext(AppContext);
  useEffect(() => {
    getPlanets();
  }, []);
  // const loaded = () => {
    return (
      <div>
         <div className='superContainer2'>
              <img src="https://64.media.tumblr.com/7b525865643fbbac5e04307f527038ba/600960038e384d1c-20/s540x810/3304554e8a9e856052847a918bd953a9e20a134f.gif" alt="" class="pic" />
            <p className='Maintext'> Star Wars Planets</p>
         </div>
      <div className="planetContainer">
        {url ? (
          url.map((card) => {
            return (
              <div className="planets">
                <h1>{card.name}</h1>
                <div className="planetInfo">
                  <h3>Rotation Period: {card.rotation_period}</h3>
                  <h3>Orbital Period: {card.orbital_period}</h3>
                  <h3>Climate: {card.climate}</h3>
                  <h3>Terrain: {card.terrain}</h3>
                  <h3>Population: {card.population}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
        {/* <h1>{url.name}</h1>  */}
      </div>
  </div>
    );
  };
//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };

//   return url ? loaded() : loading();
// }

export default Planets;