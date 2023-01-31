


import React, { Component } from 'react'

export default class UncontrolledForm extends Component {


        constructor(props){

                super(props);

                this.state = {

                        uname:"",
                        pwd:""


                }

              
               this.userRef =     React.createRef();

               this.pwdRef = React.createRef();




        }


        handleSubmit = (e)=>{

                e.preventDefault();


                this.setState({uname:this.userRef.current.value , pwd:this.pwdRef.current.value});


        }
        

  render() {
    return (
      <div>

            <h1>Welcome : {this.state.uname}  Password: {this.state.pwd}</h1>

        <h2>Class Uncontrolled Comp</h2>
  <form className='container col-lg-4'  onSubmit={this.handleSubmit}>

UserName : <input type="text" name="uname" className='form-control'  ref={this.userRef}  />
Password : <input type="password" name="pwd" className='form-control' ref={this.pwdRef}/>

<button type="submit" className='btn btn-warning '>Login</button>



</form>



        
      </div>
    )
  }
}
