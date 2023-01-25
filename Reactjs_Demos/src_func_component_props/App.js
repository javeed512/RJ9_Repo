
import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Student from './Student';

function App(props) {

  let amount = 5000;

  return ( 
     // JSX
<React.Fragment>
    
      <Header />
   
   <h1>Hello World {props.id}</h1>
   <Student sid={101}  sname="tom" fee={amount}  mno={9988776655} ></Student>


   <Footer></Footer>
   
</React.Fragment>
  );
}
export default App;
