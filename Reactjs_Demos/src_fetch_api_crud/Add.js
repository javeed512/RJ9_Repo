

import React from 'react'

export default function Add() {


      // add record

    const  postApi = ()=>{

        fetch("http://localhost:3000/employees",
        {
               method:'POST',
               body: JSON.stringify( {
                
                "ename": "Ankesh",
                "salary":35000
               
              }),
              headers:  {"Content-Type":'application/json'}

        })
        .then((response)=>{ return response.json() })
        .then((jsonData)=>{
              console.log(jsonData)
            })
    }


    // update existing record with id
    const putApi = () =>{

        fetch("http://localhost:3000/employees/105",
        {
               method:'PUT',
               body: JSON.stringify( {
                "id":105,
                "ename":"Javeed Mohammed Husnuddin",
                "salary":99000
               
              }),
              headers:  {"Content-Type":'application/json'}

        })
        .then((response)=>{ return response.json() })
        .then((jsonData)=>{
              console.log(jsonData)
            })


    }



  return (
    <div>


      

        <button onClick={postApi}>AddData</button> <br/><br/>

        <button onClick={putApi}>UpdateData</button> <br/><br/>




      
    </div>
  )
}
