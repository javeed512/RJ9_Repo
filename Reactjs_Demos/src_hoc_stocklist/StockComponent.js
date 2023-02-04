

import React, { Component } from 'react'

export default class StockComponent extends Component {

  render() {
    return (
      <div className='container col-md-4'>

        <table   className='table table-dark'>
        <tr className='table table-danger'><th>Id</th> <th>Name</th> <th>Price</th></tr>

        {

            this.props.data.map((object,i)=>{

     return  <tr key={i}> <td>{object.id}</td>  <td>{object.name}</td> <td>{object.price}</td>  </tr>
            })

        }

       

        </table>

        
      </div>
    )
  }
}
