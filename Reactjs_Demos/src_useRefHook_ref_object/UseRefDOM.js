



import React, { useEffect, useRef, useState } from 'react'

export default function UseRefDOM() {

                const[inputValue,setInputValue] =     useState("");

                     const count = useRef(0);

                     useEffect(()=>{

                            console.log('useEffect is called')

                            count.current = count.current + 1;


                     });

             const   handleEvent = (e)=>{ 
                        setInputValue(e.target.value)
                        console.log('handleEvent executed..')

                    } ;


  return (
    <div>
      
        <input type="text"   value={inputValue} onChange={handleEvent}  />
        <h1>Count: {count.current}</h1>

    </div>
  )
}
