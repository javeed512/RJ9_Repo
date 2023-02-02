
import './App.css';
import ColorUseReducer from './ColorUseReducer';
import UseEffectDemo from './UseEffectDemo';
import UseReducerDemo from './UseReducerDemo';
import UseStateDemo from './UseStateDemo';

function App() {
  return (  // JSX
  <>
   <h1>Hello World</h1>

    <UseStateDemo />

    <h1>Example on useEffect() Demo</h1>


  <UseEffectDemo />

  <h1>Use Reducer Demo</h1>


  <UseReducerDemo />

  <h1>Use Reducer for Background Color change</h1>

  <ColorUseReducer />

   </>
   
  );
}
export default App;
