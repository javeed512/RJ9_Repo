
import Acomponent from './Acomponent';
import './App.css';

function App(props) {


  return (  // JSX
  <>
   <h1>Hello World</h1>

  <Acomponent  data ={props.price} />
   </>
   
  );
}
export default App;
