
import './App.css';
import HocFunc from './HocFunc';
import StockComponent from './StockComponent';
import UserComponent from './UserComponent';


const StockData = [

  {id:101,name:"TCS" , price:900},
  {id:102,name:"Reliance" , price:400},
  {id:103,name:"Google" , price:1200},
  {id:104,name:"Bitcoin" , price:3000},
  {id:105,name:"Facebook" , price:700}



];

const UserList = [

  {id:201,name:"king",amount:50000},
  {id:202,name:"tom",amount:60000},
  {id:203,name:"smith",amount:70000},
  {id:204,name:"ford",amount:80000}



];


  const Stock =  HocFunc(StockComponent,StockData);  // HocComponent, Data for Props

  const User =  HocFunc(UserComponent,UserList);

function App() {
  return (  // JSX
  <>
   <h1>Hello World</h1>

   <Stock />

 <User />
         {/* <StockComponent data={StockData} /> */}
   </>
  );
}
export default App;
