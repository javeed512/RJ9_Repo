




import React, { useState } from 'react'

export default function ControlledForm() {


                const[user,setUser]    = useState({

                                            username:"",
                                            password:"",
                                            dob:"",
                                            category:""

                                         });


                                   const [record,setRecord]    = useState([]);       


        const  handleChange = (e)=>{

              //  console.log(e.target.name)
              //  console.log(e.target.value)

              const  name = e.target.name;  // 1.username  2.password
              const  value = e.target.value;  // 1.javeed  2. tiger


            

                setUser({...user,[name]:value});

        }



        const handleSubmit = (e)=>{

                e.preventDefault();


                    const newRecord = {...user , id:new Date().getTime().toString()}

                    setRecord([...record,newRecord])


                   console.log(record.newRecord.username)



        }



  return (
    <div>

        <h1>welcome {user.username} and {user.password}</h1>
        <h1>DOB: {user.dob}</h1>
        <h2>Category: {user.category}</h2>

      

        <form className='container col-md-5'  onSubmit={handleSubmit}>

            UserName : <input type="text"  name="username" className='form-control' value={user.username} onChange={handleChange}  />
            Password : <input type="text"  name="password"  className='form-control'  value={user.password} onChange={handleChange} />
            DOB : <input type="date"  name="dob"  className='form-control'  value={user.dob} onChange={handleChange} />
                    <button type="submit" className='btn btn-primary'>Login</button>
            Category:  <select className="form-control" name="category" value={user.category} onChange={handleChange} >
                       <option value="Not selected">Select</option>
                       <option value="Food">Food</option>
                       <option value="Entertainment">Entertainment</option>
                       <option value="Academic">Academic</option>
                       </select>
           

        </form>

        <div>
              {
                 record.map(data=>
                  {
                     return (
                        <h1>
                           {data.username}
                           {data.password}
                           {data.dob}
                           {data.category}
                        </h1>
                     )
                  })
              }
           </div> 
    </div>
  )
}
