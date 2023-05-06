import React from "react";
import bootstrap from 'bootstrap'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";





  const Forecast = ({responseObj}) => {
    
    
     
      
      console.log(responseObj)
      return(
        
        <Container>
          <p><strong>City:</strong> {responseObj.location.name}, {responseObj.location.region}</p>
          <p><strong>Country:</strong> {responseObj.location.country}</p>
          <p><strong>Temperature:</strong> {responseObj.current.temp_f}f / {responseObj.current.temp_c}c</p>
          <Container>
            
          <img src= {responseObj.current.condition.icon}></img>
          <p>{responseObj.current.condition.text}</p>
          </Container>
        </Container>
      )
    
        
    }
    


export default Forecast;