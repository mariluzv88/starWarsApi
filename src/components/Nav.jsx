import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
        <div>home page</div>
        </Link>
        <Link to='/container'>
        <div>Characters</div>
        </Link>
      
       
        
    </div>
  )
}

export default Nav