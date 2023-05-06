import React from "react";
import bootstrap from 'bootstrap'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import { Card, Container } from "react-bootstrap";





  const Current = ({responseObj}) => {
    
    
     
      
      console.log(responseObj)
      return(
        <div>
          <Row>
        <Container>
          <p><small>last updated: {responseObj.current.last_updated}</small></p>
          <p><strong>City:</strong> {responseObj.location.name}, {responseObj.location.region}</p>
          <p><strong>Country:</strong> {responseObj.location.country}</p>
          <p><strong>Temperature:</strong> {responseObj.current.temp_f}f / {responseObj.current.temp_c}c</p>
          <img src= {responseObj.current.condition.icon}></img>
          <p>{responseObj.current.condition.text}</p>
        </Container>
        </Row>
        <Row>
          <Container>
            <Card>
              <Card.Body>
              <div class="astro" className="d-flex flex-column align-items-center justify-content-center" >
              <Row>{responseObj.forecast.forecastday[0].date}</Row>
              <Row className="w-100">
              <div className="w-100 d-flex justify-content-around">
              <p><small>sunrise: {responseObj.forecast.forecastday[0].astro.sunrise}</small></p>
              <p><small>sunset: {responseObj.forecast.forecastday[0].astro.sunset}</small></p>
              </div>
              </Row>
              </div>
              </Card.Body>
            </Card>
            <Card>
            <Card.Body>
              {responseObj.forecast.forecastday[1].date}
            </Card.Body>
            </Card>
            <Card>
            <Card.Body>
              {responseObj.forecast.forecastday[2].date}
            </Card.Body>
            </Card>
          </Container>
        </Row>
        </div>
      )
    
        
    }
    


export default Current;