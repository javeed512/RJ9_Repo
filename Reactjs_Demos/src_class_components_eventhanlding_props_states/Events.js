

import React, { Component } from 'react'

export default class Events extends Component {


    constructor(){

            super();


            this.handle1 = this.handle1.bind(this);


    }


    add(a,b){

            console.log("Addition is : " , a+b)


    }

    handle1(){

         
            this.add(5,5)   // i was getting this == window object
                            // after bind(this)  this == current class obj

    }


    handleEvent(){

            console.log('button clicked event handled')

    }

    render() { //JSX area
    return (
      <div>
      
        <button onClick={this.handleEvent}  >Button1</button> <br/><br/>


        <button onClick={this.handle1}  >Addition</button>

      </div>
    )


    }

}
