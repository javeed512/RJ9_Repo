
import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';
import Table from './Table';

function App() {
  return (  // JSX
  <>

    <Header />

   <h1>Hello World</h1>

   <button className='btn btn-primary' >MyButton</button>
   <button className='btn btn-success' >MyButton</button>
   <button className='btn btn-danger' >MyButton</button>
   <button className='btn btn-warning' >MyButton</button>

   <br/><br/>

  <Table />


  <LoginForm />

   
  </> 
  );
}
export default App;
