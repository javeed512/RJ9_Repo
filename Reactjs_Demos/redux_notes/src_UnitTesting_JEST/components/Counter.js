

import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount]  = useState(0);


    const increment = ()=>{

            setCount(count + 1);

    }

    const decrement = ()=>{

            setCount(count - 1);


    }


  return (
    <div className='container'>
      
      <button data-testid="increment"   className='btn btn-success' onClick={increment}  >Plus</button>

       <h1  data-testid="counterid" >{count}</h1>
      <button  data-testid="decrement"   className='btn btn-danger' onClick={decrement} >Minus</button>




    </div>
  )
}

export default Counter
