

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function About() {

                    const navigate   = useNavigate();  // navigate is a user defined func


        const handleClick =()=>{

                // implicit routing

                    navigate('/login')  // navigate or route to the /login ==> Login.js comp


        }


  return (
    <div>
      
        <h1>About Us: We are from Hitbullseye company</h1>

        <button onClick={handleClick}>Login</button>

    </div>
  )
}
