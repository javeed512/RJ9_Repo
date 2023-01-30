
import { BrowserRouter, Route, Routes , Link, NavLink, HashRouter } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Login from './Login';

function App(props) {


  return (  // JSX
  <>
   <h1>Hello World</h1>




  <HashRouter>


      <Link  to="/"  className="badge badge-primary" >Home</Link> <br/>
      <Link  to="/contact/javeed/30"  className="badge badge-success" >Contactus</Link> <br/>
      <Link  to="/about"   className="badge badge-warning">AboutUs</Link> <br/>
      <Link  to="/err"   className="badge badge-danger">Error</Link> <br/>
      <NavLink to="/home"  className="badge badge-secondary">HomePage</NavLink>


        


     
     
    <Routes>

        <Route exact  path="/"  element={<Home />}    />
        <Route  path="/home"  element={<Home />}    />
        <Route   path="/contact/:name/:age"  element={<Contact />}    />
        <Route   path="/about"  element={<About />}    />
        <Route   path="/*"  element={<Error />}    />

        <Route   path="/login"  element={<Login />}    />




    </Routes>
  
  
  
  
  
  </HashRouter>




  </> 
  );
}
export default App;
