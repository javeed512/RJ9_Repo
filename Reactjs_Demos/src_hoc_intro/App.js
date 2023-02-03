
import './App.css';
import Hoc from './Hoc';

function App() {
  return (  // JSX
  <>
   <h1>Hello World from App Component</h1>

   </>
   
  );
}


App = Hoc(App);
export default App;
