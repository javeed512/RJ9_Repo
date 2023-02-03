
import { useCallback, useState } from 'react';
import './App.css';
import Button from './Button';
import Student from './Student';
import TestCustomHook from './TestCustomHook';
import Title from './Title';

function App() {


    const [age,setAge]  = useState(18);

    const [fee,setFee]  = useState(1000);

  const incrementAge = useCallback( ()=>{

        setAge(age + 1);

  },[age]);

  const incrementFee =  useCallback(()=>{

      setFee(fee + 1);


  },[fee]);




  return (  // JSX
  <>
   <h1>Hello World</h1>

   

   <Student text="age"  count={age} />

   <Button  handleClick={incrementAge}  >Increment Age</Button>


   <Student text="fee"  count={fee} />

   <Button  handleClick={incrementFee}  >Increment Fee</Button>


<h1>Custom Hook Demo</h1>

  <TestCustomHook />

   </>
   
  );
}
export default App;
