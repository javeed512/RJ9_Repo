

import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {


                 let{name , age}  = useParams(); // this hook is used to read param values from path


  return (
    <div>
        <h1>Contact us on : 040-2345678</h1>
        <h2>Thank you {name}  for contacting us : Age { age }</h2>
      
    </div>
  )
}
