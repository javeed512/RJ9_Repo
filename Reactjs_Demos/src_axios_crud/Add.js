

import React from 'react'

import axios from 'axios'

export default function Add() {

    const addEmp = ()=>{

        axios.post("http://localhost:3000/employees",{

            "id":107,
            "ename":"Sarjith",
            "salary":65000

        })
        .then((response)=>{console.log(response.data); })
        .catch( (err)=>{ console.log(err)} )





    }



    const  updateEmp = ()=>{

        axios.put("http://localhost:3000/employees/101",{

        "id":101,
        "ename":"King Khan",
        "salary":99000

    })
    .then((response)=>{console.log(response.data); })
    .catch( (err)=>{ console.log(err)} )

    }



  return (
    <div>

<button onClick={addEmp}>Add Emp</button> <br></br>


<button onClick={updateEmp}>Update Emp</button>
      
    </div>
  )
}
