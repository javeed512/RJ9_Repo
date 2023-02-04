

import { useState } from 'react';
import './App.css';
import FormChild from './FormChild';

function App() {

    const [name,setName] = useState();

  const getData = (data)=>{

        console.log('data from child to parent ',data);

        setName(data);

  }


  return (  // JSX

  <>
   <h1>Hello World , Name : {name}</h1>

   <FormChild  onSubmit= {getData} />

   <FormChild  value="ankesh" />

   </>
   
  );
}
export default App;
