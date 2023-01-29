

import React, { useState } from 'react'

export default function Get() {
              const[data,setData]    =  useState([]);

                       const[count,setCount]  = useState(0); 
                        // useState() hook which give access to the state in func component

                      const increment = ()=>{

                            setCount(count+1);
                      } 
    const get = ()=>{

        fetch("http://localhost:3000/employees",{method:'GET'})
            .then((response)=>{ return response.json() })
            .then((jsonData)=>{
                  console.log(jsonData)
                    setData(jsonData)
                
                })

    }

  return (
    <div>

        <h1>Count Value: {count}</h1>

        <h2>{JSON.stringify(data)}</h2>

        <button onClick={increment}>Increment</button>  <br/><br/>

        <button onClick={get}>GetAll</button>
      
    </div>
  )
}
