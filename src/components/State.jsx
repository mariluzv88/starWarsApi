import React from 'react'
import { useState } from 'react'
function State() {
  const [movie, setMovie] = useState("return of the jedi");
  const handleClick = () => {
    setMovie("empire strikes back!");
  };
  return (
    <div className="state">
      <p>{movie}</p>
      <button onClick={handleClick}>click for another film</button>
    </div>
  );
}
export default State;