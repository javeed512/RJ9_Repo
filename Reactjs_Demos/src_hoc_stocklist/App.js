
import './App.css';
import HocFunc from './HocFunc';
import StockComponent from './StockComponent';


const StockData = [

  {id:101,name:"TCS" , price:900},
  {id:102,name:"Reliance" , price:400},
  {id:103,name:"Google" , price:1200},
  {id:104,name:"Bitcoin" , price:3000},
  {id:105,name:"Facebook" , price:700}



];


  const Stock =  HocFunc(StockComponent,StockData);  // HocComponent, Data for Props


function App() {
  return (  // JSX
  <>
   <h1>Hello World</h1>

   <Stock />

         {/* <StockComponent data={StockData} /> */}
   </>
  );
}
export default App;
