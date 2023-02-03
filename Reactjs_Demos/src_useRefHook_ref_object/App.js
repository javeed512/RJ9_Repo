
import './App.css';
import UseRefDemo from './UseRefDemo';
import UseRefDOM from './UseRefDOM';
import UseRefWithRef from './UseRefWithRef';

function App() {
  return (  // JSX

  <>
   <h1>Hello World</h1>

  <UseRefDemo />

  <h1>UseRef Accessing DOM</h1>

  <UseRefDOM />

  <h2>UseRef with form ref obj</h2>

  <UseRefWithRef />

   </>
  );
}
export default App;
