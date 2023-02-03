

import React, { useRef, useState } from 'react'

export default function UseRefDemo() {

    const [name,setName]  = useState("Javeed");

    const  ref = useRef();


  const  getUpdateData = ()=>{

             //  setName('King khan')
             
            

                console.log('before ',name)

                ref.current = "King Khan";

              console.log('after ',ref.current)

              setName(ref.current)




    }


  return (
    <div>

        <h2>Name :{name}</h2>
        <button  onClick={getUpdateData} >Change</button>
      
    </div>
  )
}
