

import React, { useState } from 'react'

export default function UseStateDemo() {

          const  stateVariable =      useState('King');

          const [name,setName] = useState('Ankesh');

          const [count,setCount] = useState(0);

const update = ()=>{

      
        stateVariable[1]('king khan');

        setName('Ankesh Kumar Pandey');

        setCount(count+1)

}
  return (

    <div>

        <h1>Name: {stateVariable[0]}</h1>

        <h2>Name2: {name}</h2>

        <h3>Count: {count}</h3>

        <button onClick={update}>Update</button>


    </div>
  )
}
