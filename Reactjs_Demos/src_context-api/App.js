
import React from 'react';
import Acomponent from './Acomponent';
import './App.css';



 export  const PriceContext =  React.createContext();

function App(props) {


  return (  // JSX
  <>
   <h1>Hello World</h1>

    <PriceContext.Provider value ={props.price} >

          <Acomponent/>

   </PriceContext.Provider>
   </>
   
  );
}
export default App;
