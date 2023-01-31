


import React, { useState } from 'react'

export default function FormFunc() {


 

            const[user,setUser]  =    useState({

                    uname:"",
                    pwd:""

            });

                
    const userRef = React.createRef();
    const pwdRef = React.createRef();



    const handleSubmit = (e) =>{

            e.preventDefault();


          setUser({uname:userRef.current.value , pwd:pwdRef.current.value})


    }



  return (
    <div>
        <h2>Func UnControlled Comp</h2>
        <h1>Data: {user.uname}  {user.pwd}</h1>
        
  <form className='container col-lg-4'  onSubmit={handleSubmit}>

UserName : <input type="text" name="uname" className='form-control'  ref={userRef}  />
Password : <input type="password" name="pwd" className='form-control' ref={pwdRef}/>

<button type="submit" className='btn btn-success '>Login</button>



</form>



      
    </div>
  )
}
