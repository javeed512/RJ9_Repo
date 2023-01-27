

import React, { Component } from 'react'

export default class Employee extends Component {


    constructor(){

            super();


        this.state = {

                eid: 101,
                ename: "King",
                salary: 65000

  
        }
  }


  handleClick = () => {

    this.setState({eid:105,ename:"Sahil",salary:75000});

        console.log(this.state)

    }




  render() {
    return (
      <div>

        <h1>{this.state.eid}  {this.state.ename} {this.state.salary}</h1>

        <button onClick={this.handleClick}>Click For Update</button>
        
      </div>
    )
  }
}
