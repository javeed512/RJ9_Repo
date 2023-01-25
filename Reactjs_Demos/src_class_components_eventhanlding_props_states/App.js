
import './App.css';
import Employee from './Employee';
import Events from './Events';
import Student from './Student';

function App(props) {
  return (  // JSX

  <>
   <h1>Hello World</h1>

   <Student  sid={101} sname="javeed" fee="3000" />

  <Events/>



  <br/>
  <br/>


<Employee  eid={101}  ename="king"  amount= {12000}  ></Employee>



   </>
   
  );
}
export default App;
