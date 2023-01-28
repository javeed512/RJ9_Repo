

import React, { Component } from 'react'

export default class Mounting extends Component {

        
  constructor(props){

      super(props);

        console.log('constructor called... component instance created')


      this.state = {

            color:"green"

      }
  }


   static getDerivedStateFromProps(props,state){ // always called before render()

    console.log('getDerivedStateFromProps() called..')
    console.log(props,state)

      return    {color:props.favcolor};

    }


      render(){

          console.log('render() is called data rendered..')

          return(
              <>
      <h1 style={{color:this.props.favcolor}} >My FavColor is : {this.state.color}</h1>
              
              </>


          );

      }

      componentDidMount(){

          console.log('componentDidMount() called , means render success..')

      }


}
