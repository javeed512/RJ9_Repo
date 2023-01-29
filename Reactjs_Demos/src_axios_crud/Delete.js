

import React from 'react'

import axios from 'axios'

export default function Delete(props) {


    const deleteEmpById = ()=>{


        axios.delete("http://localhost:3000/employees/"+props.eid)
        .then((res)=>{ console.log(res,'record deleted for Emp ',props.eid)})
        .catch( (err)=>{console.log(err)})



    }

  return (
    <div>
      

        <button onClick={deleteEmpById}>DeleteByid</button>

    </div>
  )
}
