


import React, { Component } from 'react'

export default function Hoc(HocComponent,data) {

        return class      extends Component{

                constructor(props){
                        super(props);

                        this.state = {

                            value : data
                        }


                }


                    render(){


                        return (
                            <div>
                                    <h1> hi from Hoc</h1>
                <HocComponent data = {this.state.value}   {...this.props}/>
            
                         </div>
                      )
      
      
                    }



            }  


                        
               




}
