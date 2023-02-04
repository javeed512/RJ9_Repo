

import React from 'react'

import { PriceContext } from './App'

export default function Ccomponent(props) {
  return (
    <div>

<h1>Welcome to C component  </h1>
      <PriceContext.Consumer>

      
   

      {
          (data)=>{ return <h1>Price : {data}</h1>}
      }


      </PriceContext.Consumer>



  
</div>
  )
}
