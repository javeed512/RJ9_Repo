

import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

import * as yup   from 'yup';

export default function SignupForm() {


              const[data,setData]   =   useState({});



              
    const  defaultValues = {

                name:"",
                password:"",
                age:"",
                gender:"",
                country:"",
                dob:""

    };

    const handleSubmit = (formValues)=>{


                console.log('Values ',formValues);

                setData(formValues);
    }


        const myValidationSchema = yup.object().shape({

                name:yup.string().required('User Name is Mandatory') ,
                password:yup.string().required('Password is Mandatory').min(6) ,
                age: yup.number().required('Age is Mandatory').positive().integer() ,
                gender:yup.string().required('Please Select Your Gender') ,
                country:yup.string().required('Select Your country its Mandatory') ,
                dob: yup.date().required('DOB is mandatory') ,
                email:yup.string().required('Email is required').email('Its not valid email format')



        });
               
  return (
    <div>

        <h1>Credentials: {data.name}  {data.password}</h1>
        <h2>Age: {data.age}  Gender: {data.gender}</h2>

        <Formik   initialValues={defaultValues}   validationSchema= {myValidationSchema}     onSubmit={handleSubmit}>

            <Form    className='container  col-md-4' >

                <Field    name="name" placeholder="Enter User Name"   className="form-control mt-4"   />
                    <p  className='text-danger' >    <ErrorMessage  name="name"/> </p>


                <Field type="text"    name="password" placeholder="Enter Password"  className="form-control mt-4" />

                <p  className='text-danger' >    <ErrorMessage  name="password"/> </p>

                <Field  type="number"  name="age" placeholder="Enter Age"  className="form-control mt-4" />

                    <p  className='text-danger' >    <ErrorMessage  name="age"/> </p>

                    <Field   type="email" name="email" placeholder="Enter Email"   className="form-control mt-4"   />
                    <p  className='text-danger' >    <ErrorMessage  name="email"/> </p>




                 Gender:   <Field type="radio"   name="gender"  value="male" className="mt-4" /> Male 
                              <Field type="radio"   name="gender"  value="female" /> Female   <br/>

                              <p  className='text-danger' >    <ErrorMessage  name="gender"/> </p>


                   DOB:   <Field  type="date"  name="dob" placeholder="Enter DOB"  className="form-control mt-4" />

                        <p  className='text-danger' >    <ErrorMessage  name="dob"/> </p>       

                 Country: <Field component="select"  name="country"  className="custom-select custom-select-lg mb-3" >

                              <option selected >--select--</option>

                            <option value="IND" >India</option>
                            <option value="AUS" >Australia</option>
                            <option value="America" >USA</option>
                            <option value="1001" >Singapure</option>


                             </Field>

                             <p  className='text-danger' >    <ErrorMessage  name="country"/> </p>


                <button type="submit"  className='btn btn-primary  mt-5' >Signup</button>

            </Form>

        </Formik>
      
    </div>
  )
}

