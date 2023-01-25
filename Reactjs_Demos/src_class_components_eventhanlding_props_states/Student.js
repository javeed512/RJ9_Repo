
import { Component } from "react";

import PropTypes from 'prop-types'


class Student extends  Component {




        constructor(){
            super();     // Component();

                console.log('Student constructor called.')

               // this.handleClick = this.handleClick.bind(this);


        }


        handleClick = ()=>{

            console.log(this.props.sname ); // here this refers to current class obj


               console.log(this)  // current class object

        }




    render(){

            return (

                <>

                <h1>Welcome to Student Component</h1>

                <h2>Student details:</h2>
                <h2>Sid:  {this.props.sid} </h2>
                <h2>SName:  {this.props.sname} </h2>
                <h2>Fee:  {this.props.fee} </h2>

                <button onClick={this.handleClick} >Get Name</button>


                </>
            );

     }
}


Student.propTypes = {

    sid: PropTypes.number.isRequired


}

export default Student;

