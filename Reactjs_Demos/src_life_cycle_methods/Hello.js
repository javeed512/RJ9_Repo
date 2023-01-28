

import React, { Component } from 'react'

export default class Hello extends Component {

  componentDidMount()
  {
      console.log("Hello Mounted");
  }
  //this method we will use to do something before component is remove
  componentWillUnmount()
  {
      console.log("Hello unmounted")
  }




  render() {
    return (
      <div>
        
        <h1>Welcome : {this.props.name}</h1>
      </div>
    )
  }
}
