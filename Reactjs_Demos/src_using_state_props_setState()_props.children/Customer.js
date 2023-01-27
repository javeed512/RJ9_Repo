

import React, { Component } from 'react'

export default class Customer extends Component {





     


  render() {

       

    return (
      <div>


                <h1>Welcome Customer :{this.props.name}</h1>

                <h2>{this.props.children}</h2>

             


      

      </div>
    )

    
  }
}
