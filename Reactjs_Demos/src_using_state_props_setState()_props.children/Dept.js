


import React, { Component } from 'react'

export default class Dept extends Component {


        state ={

                dno : 21,
                dname: "Testing",
                count: 99

        }


        handleClick = ()=>{

            this.setState(function (state,props){

                        console.log("previous state "+state.count);
                        console.log("props "+props.location)

                    
                    return {count:state.count + 1} ;


            });  //callback function

        }



  render() {
    return (
      <div>

            <h1>Dept Details: </h1>
            <h2>{this.state.dno} {this.state.dname}  {this.state.count}</h2>

            <button onClick={this.handleClick}>Get Dept</button>

        
      </div>
    )
  }
}
