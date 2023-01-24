

import PropTypes from 'prop-types'

import  './index.css';

function  Student(props){  // Student function component

    let age = 20;

    const list = (

        <ul>
        <li>Biryani</li>
        <li>Chapati</li>
        <li>Parata</li>
        <li>Idly</li>
         </ul>

    );

   let mycolor = "pink";

    function   f1(){

            alert("Hello guys , f1() called.")

    }


    return (

        <>
    
    <h1 style={{color:"red",background:"green"}} >Hi I am Student  {age}</h1>
    <h2 style={{color:mycolor}}> {5+5}  </h2>
    <h3>{Math.floor(Math.random()*1000)}</h3>

       <div>{list}</div> 


        <button  className='btn' type="button"  onClick={f1}>Click</button>

        <h1>Sid: {props.sid}   Sname: {props.sname}  Fee:{props.fee}</h1>

        <h2>Contact: {props.mno}</h2>


        </>
    
    );



}


Student.propTypes ={

            sid: PropTypes.number.isRequired  ,
            sname: PropTypes.string,
            fee:  PropTypes.number,
            mno: PropTypes.number.isRequired


}


Student.defaultProps ={

    sid : 0,
    mno:  0

}



export default Student;