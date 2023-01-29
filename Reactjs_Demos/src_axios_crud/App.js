
import Add from './Add';
import './App.css';
import Delete from './Delete';
import GetAll from './GetAll';

function App() {
  return (  // JSX

  <>
   <h1>Hello World</h1>

   <GetAll />

   <Add />

   <Delete  eid={105} />
   
   </>

  );
}
export default App;
