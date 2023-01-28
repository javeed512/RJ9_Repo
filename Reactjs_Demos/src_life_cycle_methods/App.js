
import './App.css';
import Hello from './Hello';
import Mounting from './Mounting';
import Updating from './Updating';

function App() {

 

  const myname = "javeed"

  return (  // JSX

  <>


   <h1>Hello Friends</h1>
   
  <Hello  name={myname} />

  <h2>Thank you Guys</h2>

  {/* <Mounting  favcolor="yellow" /> */}

  {/* <Updating favcolor="yellow" /> */}
  
  </>

  );
}
export default App;
