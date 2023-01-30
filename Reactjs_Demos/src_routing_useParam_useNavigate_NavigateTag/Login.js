

import React, { Component } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default class Login extends Component {

        


    handle = () =>{

               <Navigate to="/contact/sumit/23"  />


    }


  render() {
    return (
      <div>
            <h1>Login Page</h1>
            <button onClick={this.handle}>Contact</button>

      </div>
    )
  }
}
