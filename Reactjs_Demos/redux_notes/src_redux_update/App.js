
import './App.css';

import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber} from "./actions/index";
import Hello from './Hello';



function App() {

  const mystate=useSelector((state)=> state.changeTheNumber); // read state data from state.changeTheNumber
  const dispatch=useDispatch();  // it will dispatch action to update existing state value in redux store

  

  return (  // JSX
  <>
   <h1>Increment/Decrement Counter</h1>
    <h2>Using React Redux</h2>

    <button  className='btn btn-danger' onClick={()=>{dispatch(  decNumber()  )} }  >Minus</button>

      <input type="text"  value={mystate}  /> 


    <button  className='btn btn-success'     onClick={()=>{ dispatch(  incNumber()  ) } }  >Plus</button>

<br/>

 

   </>
   
  );
}
export default App;
