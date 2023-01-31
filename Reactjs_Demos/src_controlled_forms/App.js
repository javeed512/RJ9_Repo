
import './App.css';
import ControlledForm from './ControlledForm';


import  redcar from  './redcar.jpg'

function App() {
  return (  // JSX

  <>
   <h1>Hello World</h1>

   {/* <img src={process.env.PUBLIC_URL+"/images/logo.jpg"} /> */}


<h1>From src Folder</h1>

  {/* <img src={redcar}  alt="red car image"/>  */}
  
  

      <ControlledForm />
  
    </>
   
  );
}
export default App;
