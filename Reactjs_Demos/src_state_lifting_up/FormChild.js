

import React, { useState } from 'react'

export default function FormChild(props) {

   const [data,setData]  =       useState("");

    const handleChange = (e)=>{

            

            setData(e.target.value);


    }

    const handleSubmit = (e)=>{

            e.preventDefault();

                props.onSubmit(data); // getting FormChild property = onSubmit()



    }


  return (
    <div>
        <h1>Data from Parent :{props.value}</h1>

        <form onSubmit={handleSubmit}>

        Child Data : <input type="text" onChange={handleChange} />
        <button type="submit">Send Data</button>

        </form>
      
    </div>
  )
}
