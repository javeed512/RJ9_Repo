

import React from 'react'

export default function Delete() {


    const  deleteApi = ()=>{


        fetch("http://localhost:3000/employees/107",{method:'DELETE'})
        .then((response)=>{ return response.json() })
        .then((jsonData)=>{
              console.log('RECORD DELETED ')
                
            
            })



    }



  return (
    <div>

        <button onClick={deleteApi}>DeleteById</button>
      
    </div>
  )
}
