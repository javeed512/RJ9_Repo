



import React, { useReducer } from 'react'

const initialStateValue = 'orange';

     var myaction = 'No Action';

 const  reducer = (state,action)=>{
      
        myaction = action;
        

        switch(action){

                case 'green' :  { return state = 'green';} ;
                case 'red' :  { return state = 'red'} ;
                case 'blue' :  { return state = 'blue'} ;
                case 'reset' :  { return initialStateValue} ;
                default: return state;

        }
 }

export default function ColorUseReducer() {
     const [mycolor,dispatch] =     useReducer(reducer,initialStateValue);

  return (
    <div style={{color:`${mycolor}`}} >


       <h1> Count Based on Action : { mycolor } </h1>
       <h2>Action: {myaction}</h2>

        <button  onClick={()=>{dispatch('green')}}>Green</button>
        <button  onClick={()=>{dispatch('red')}}>Red</button>
        <button  onClick={()=>{dispatch('blue')}}>Blue</button>
        <button  onClick={()=>{dispatch('reset')}}>Reset</button>
      
    </div>
  )
}
