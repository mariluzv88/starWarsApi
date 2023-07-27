import React, { createContext } from 'react'
import { AppContext } from '../context/App_context'
import { useState,useContext } from 'react'

function Cards(props) {
    let {getInfo} = createContext(AppContext)
    let {url} = createContext(AppContext)
  return (
    <div>
          {/* {props.url? props.url.map((card)=>{
          return (
            <div>
                <h1>{card.name}</h1>
            </div>
          )
         }):<p>Loading</p>}
         <h1>hi{url.name}</h1>  */}
    </div>
  )
}

export default Cards