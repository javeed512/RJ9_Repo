

import React from 'react'

import  style from './mystyles.module.css'; // module.css

import styled from 'styled-components';  // style-component from external react lib

export default function Demo() {

  
  const Div = styled.div`
  margin: 20px;  
  border: 5px dashed green;  
  &:hover {  
  background-color: ${(props) => props.hoverColor};  
  }  `;


  const Paragraph = styled.p`  
  font-size: 25px;  
  text-align: center;  
  background-Color: lightgreen;  
  `;  



  return (
    <div>

        <h1 className={style.mystyle}>Hello from demo</h1>

        <p  className={style.parastyle}>This is my Paragraph</p>
      

    <Div>

        <Paragraph>This is custome para style</Paragraph>

       
    </Div>
      

    </div>
  )
}
