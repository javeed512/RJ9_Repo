


import React, { Component } from 'react'

export default function HocFunc(HocComponent,stockList) {
  

    return class  extends Component{

                    constructor(props){

                        super(props);

                        this.state = {


                            value : stockList
                        }



                    }



            render(){


                    return (

                            <HocComponent  data= {this.state.value} />

                    );





            }






    }




}
