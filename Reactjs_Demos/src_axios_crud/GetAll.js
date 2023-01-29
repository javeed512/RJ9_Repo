

import React, { useState } from 'react';

import axios from 'axios';

export default function GetAll() {


                   const[empList,setEmpList]  =  useState([]);


        const getAll = ()=>{


                axios.get("http://localhost:3000/employees")
                .then((response)=>{console.log(response.data);   setEmpList(response.data); })
                .catch( (err)=>{ console.log(err.message)} )



        }



  return (
    <div>
      

        <h1>{JSON.stringify(empList)}</h1>

    <table  style={{borderStyle:"dotted",backgroundColor:"red"}}  border="1">

            {empList.map((emp)=>{

                 return   <tr> <td>{emp.id}</td>  <td>{emp.ename}</td> <td>{emp.salary}</td> </tr>

            })}


    </table>


            <br/><br/>

        <button onClick={getAll}>GetAll</button>

    </div>
  )
}
