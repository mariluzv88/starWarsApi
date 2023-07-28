import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>HOMEPAGE</div>
      </Link>
      <Link to="/characters">
        <div>CHARACTERS</div>
      </Link>
      <Link to="/planets">
        <div>PLANETS</div>
      </Link>
      <Link to="/films">
        <div>FILMS</div>
      </Link>
      <Link to="/species">
        <div>SPECIES</div>
      </Link>
      <Link to="/vehicles">
        <div>VEHICLES</div>
      </Link>
      <Link to="/starship">
        <div>STARSHIP</div>
      </Link>
    </div>
  );
}

export default Nav;