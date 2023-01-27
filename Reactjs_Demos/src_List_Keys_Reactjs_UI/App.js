
import './App.css';

function App(props) {

  const  list = (
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
          <li>Mango</li>
      </ul>
  );



    const productList = [

          {id:101,pname:"Mobile",price:12000},
          {id:102,pname:"Laptop",price:45000},
          {id:103,pname:"Charger",price:2000},
          {id:104,pname:"Keyboard",price:900},
          {id:105,pname:"USB",price:120}



    ];



  return (  // JSX

  <>
   <h1>Hello World</h1>

    <h1>Props: {props.city}  {props.key}</h1>


   <div> {list}  </div>

   <h1>Products Details</h1>

   <ul>

      {productList.map( 
        (product)=>{ 
         return  <li key={product.id} > {product.pname} {product.price} </li>   
             } )  }
   </ul>


  <table border={1}>
  
    {productList.map( 
        (product)=>{ 
         return <tr  key={product.id} > <td > {product.pname} </td> <td>{product.price} </td> </tr>
     
             } )  }  
  </table>

             <br/><br/>


          <div>
            
          {productList.map( 
        (product)=>{ 
         return  <button >{product.pname} </button>   
             } )  } 
            
        </div>   


   </>
   
  );
}
export default App;
