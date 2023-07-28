import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/App_context";

function Cards(props) {
  let { url } = useContext(AppContext);

  const loaded = () => {
    return (
      <div className="characterContainer">
        {url ? (
          url.map((card) => {
            return (
              <div className="characters">
                <h1>{card.name}</h1>
                <div className="characterInfo">
                  <h3>Height: {card.height}cm</h3>
                  <h3>Weight: {card.mass}kg</h3>
                  <h3>Hair Color: {card.hair_color}</h3>
                  <h3>Eye Color: {card.eye_color}</h3>
                  <h3>Gender: {card.gender}</h3>
                  <h3>Year of Birth: {card.birth_year}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
        {/* <h1>{url.name}</h1>  */}
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return url ? loaded() : loading();
}

export default Cards;