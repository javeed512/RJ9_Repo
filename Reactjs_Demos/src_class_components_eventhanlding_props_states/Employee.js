

import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props){
            super(props);

        console.log(this.props)
              //  this.props.eid = 999;  // not possible to modify bcz props are immutable
            this.state = { 

                        mno: 9988776655,
                        city: "Hyderabad",
                        salary: this.props.amount               
            }
   }


    handleClick(e){

            console.log(e) // e is a event captured from eventhandler

            e.preventDefault(); // it will prevent navigation to the server

        alert('onClick event handled')



    }


  render() {
    return (
      <div>

        <a href="http://www.google.com"  onClick={this.handleClick}>Google</a>

        <h1>Employee Component</h1>
        <h2>Eid:{this.props.eid}  Ename: {this.props.ename}</h2>

        <h1>State Properties</h1>
        <h2>{this.state.mno}</h2>
        <h2>{this.state.city}</h2>
        <h2>{this.state.salary}</h2>

      </div>
    )
  }
}
