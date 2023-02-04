

import React, { Component } from 'react'

export default class UserComponent extends Component {


  render() {
    return (
      <div className='container col-md-3 '>
        <ol className='list-group'>

        {

               this.props.data.map((object,i)=>{

         return <li   className='list-group-item' key={i}> {object.id}  {object.name}  {object.amount}</li>

               })



        }


        </ol>
        
      </div>
    )
  }
}


