

import React from 'react'

export default function Table() {
  
    const productList = [

        {id:101,pname:"Mobile",price:12000},
        {id:102,pname:"Laptop",price:45000},
        {id:103,pname:"Charger",price:2000},
        {id:104,pname:"Keyboard",price:900},
        {id:105,pname:"USB",price:120}

  ];

  
    return (
    <div  className='container col-md-4'>
      
        <table className='table  table-bordered table-dark'>

            <tr style={{backgroundColor:"red"}} ><th>Id</th>  <th>PName</th>  <th>Price</th> </tr>
            {productList.map(

                    (product)=>{  
                    
      return   <tr>
         <td>{product.id}</td>
          <td>{product.pname}</td>
           <td>{product.price}</td>
            </tr>
                    
                    }


            )}



        </table>



    </div>
  )
}
