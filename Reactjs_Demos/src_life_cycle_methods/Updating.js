

import React, { Component } from 'react'

export default class Updating extends Component {
 
    
        
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

    return    {color : state.color};

  }

  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("shouldcomponentupdate called");
    console.log(nextProps,nextState)
    return true;
  }
   //this method runs before update
   getSnapshotBeforeUpdate(prevProps,prevState)
   {
       console.log("get snap shot before update ");
       console.log(prevProps,prevState);
       return true;
   }

    changeColor = () =>{


            this.setState({color:"red"});

    }



    render(){

        console.log('render() is called data rendered..')

        return(
            <>
    <h1 style={{color:this.state.color}} >My FavColor is : {this.state.color}</h1>
            
             <button onClick={this.changeColor} >Update Color</button>
            </>


        );

    }

    componentDidMount(){

            console.log('component mounted only once 1st time')
    }

    componentDidUpdate(){

        console.log('componentDidUpdate() called , means render updated success..')

    }



}
