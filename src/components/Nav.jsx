import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
        <div>home page</div>
        </Link>
        <Link to='/electric'>
        <div>Electric</div>
        </Link>
        <Link to='/psychic'>
        <div>Psychic</div>
        </Link>
        <Link to='/fire'>
        <div>Fire</div>
        </Link>
        <Link to='/water'>
        <div>Water</div>
        </Link>
        <Link to='/grass'>
        <div>Grass</div>
        </Link>
       
        
    </div>
  )
}

export default Nav