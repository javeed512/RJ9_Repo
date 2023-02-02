

import React, { useReducer } from 'react'

const initialStateValue = 0;

     var myaction = 'No Action';

 const  reducer = (state,action)=>{
        myaction = action;

        switch(action){

                case 'increment' : return state + 1;
                case 'decrement' : return state - 1;
                case 'reset' : return initialStateValue;
                default: return state;

        }
 }

export default function UseReducerDemo() {
     const [count,dispatch] =     useReducer(reducer,initialStateValue);

  return (
    <div>

       <h1> Count Based on Action : { count } </h1>
       <h2>Action: {myaction}</h2>

        <button  onClick={()=>{dispatch('increment')}}>Increment</button>
        <button  onClick={()=>{dispatch('decrement')}}>Decrement</button>
        <button  onClick={()=>{dispatch('reset')}}>Reset</button>
      
    </div>
  )
}
