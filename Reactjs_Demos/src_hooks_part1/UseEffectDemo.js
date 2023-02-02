

import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

        const[count, setCount]  = useState(0);

        const handleClick = ()=>{


                setCount(count + 1)

        }

        useEffect(()=>{

            document.title = `You clicked ${count}  times`

        });
  return (
    <div>

        <h1>Count Rendered: {count}</h1>

        <button onClick={handleClick}>Count+</button>
      
    </div>
  )
}
