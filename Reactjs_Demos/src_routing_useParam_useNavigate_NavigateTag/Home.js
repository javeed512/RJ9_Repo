

import React from 'react'
import { Navigate } from 'react-router-dom'
import Error from './Error';
import Login from './Login';

export default function Home() {

    const  isValid = true;

  return (
    <div>
      <h1>Welcome to Home</h1>
      {  isValid ? <Navigate to="/about" /> : <Navigate to="/err" /> }


      {/* {  isValid ?  <Login /> :<Error /> } */}
    </div>
  )
}
