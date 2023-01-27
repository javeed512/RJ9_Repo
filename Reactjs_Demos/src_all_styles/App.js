
import './App.css';
import Demo from './Demo';
import Products from './Products';

function App(props) {

  const  mybackground = "yellow";

  return (  // JSX
  <>
   <h1 style= {{color:"red" }} >Hello World</h1>
   <h1 style= {{color:props.mycolor , background: mybackground}} >Hello World</h1>
  <h2>Hello this is from External CSS</h2>
  
  <br/><br/>

  <button type="button" className='btn'>Button1</button>


  <Demo />


  <Products />




   </>
   
  );
}
export default App;
