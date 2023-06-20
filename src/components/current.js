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
              <Row>
                {responseObj.forecast.forecastday[0].date}
              </Row>
              <Row className="w-100">
                <div className="w-100 d-flex justify-content-around">
                  <p><small>sunrise: {responseObj.forecast.forecastday[0].astro.sunrise}</small></p>
                  <p><small>sunset: {responseObj.forecast.forecastday[0].astro.sunset}</small></p>
                </div>
              </Row>
            </div>
            <div class="conditions">
              <Row className="w-100 text-center">
                <p><small> Avg temp:{responseObj.forecast.forecastday[0].day.avgtemp_f}°</small></p>
              </Row>
              <Row className="w-100">
                <div className="w-100 d-flex justify-content-around">
                  <p><small> Low: {responseObj.forecast.forecastday[0].day.mintemp_f}°</small></p>
                  <p><small> High: {responseObj.forecast.forecastday[0].day.maxtemp_f}°</small></p>
            
                  
                </div>
              </Row>
              <Row >
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                  <img src= {responseObj.forecast.forecastday[0].day.condition.icon}></img>
                  <p><small>{responseObj.forecast.forecastday[0].day.condition.text}</small></p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <p><small>Precip chance: {responseObj.forecast.forecastday[0].day.daily_chance_of_rain}%</small></p>
                </div>
              </Row>
            </div>
            </Card.Body>
            </Card>
            <Card>
            <Card.Body>
            <div class="astro" className="d-flex flex-column align-items-center justify-content-center" >
              <Row>
                {responseObj.forecast.forecastday[1].date}
              </Row>
              <Row className="w-100">
                <div className="w-100 d-flex justify-content-around">
                  <p><small>sunrise: {responseObj.forecast.forecastday[1].astro.sunrise}</small></p>
                  <p><small>sunset: {responseObj.forecast.forecastday[1].astro.sunset}</small></p>
                </div>
              </Row>
            </div>
            <div class="conditions">
              <Row className="w-100 text-center">
                <p><small> Avg temp:{responseObj.forecast.forecastday[1].day.avgtemp_f}°</small></p>
              </Row>
              <Row className="w-100">
                <div className="w-100 d-flex justify-content-around">
                  <p><small> Low: {responseObj.forecast.forecastday[1].day.mintemp_f}°</small></p>
                  <p><small> High: {responseObj.forecast.forecastday[1].day.maxtemp_f}°</small></p>
            
                  
                </div>
              </Row>
              <Row >
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                  <img src= {responseObj.forecast.forecastday[1].day.condition.icon}></img>
                  <p><small>{responseObj.forecast.forecastday[1].day.condition.text}</small></p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <p><small>Precip chance: {responseObj.forecast.forecastday[1].day.daily_chance_of_rain}%</small></p>
                </div>
              </Row>
            </div>
            </Card.Body>
            </Card>
            
            <Card>
            <Card.Body>
            <div class="astro" className="d-flex flex-column align-items-center justify-content-center" >
              <Row>
                {responseObj.forecast.forecastday[2].date}
              </Row>
              <Row className="w-100">
                <div className="w-100 d-flex justify-content-around">
                  <p><small>sunrise: {responseObj.forecast.forecastday[2].astro.sunrise}</small></p>
                  <p><small>sunset: {responseObj.forecast.forecastday[2].astro.sunset}</small></p>
                </div>
              </Row>
            </div>
            <div class="conditions">
              <Row className="w-100 text-center">
                <p><small> Avg temp:{responseObj.forecast.forecastday[2].day.avgtemp_f}°</small></p>
              </Row>
              <Row className="w-100">
                <div className="w-100 d-flex justify-content-around">
                  <p><small> Low: {responseObj.forecast.forecastday[2].day.mintemp_f}°</small></p>
                  <p><small> High: {responseObj.forecast.forecastday[2].day.maxtemp_f}°</small></p>
            
                  
                </div>
              </Row>
              <Row >
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                  <img src= {responseObj.forecast.forecastday[2].day.condition.icon}></img>
                  <p><small>{responseObj.forecast.forecastday[2].day.condition.text}</small></p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <p><small>Precip chance: {responseObj.forecast.forecastday[2].day.daily_chance_of_rain}%</small></p>
                </div>
              </Row>
            </div>
            </Card.Body>
            </Card>
          </Container>
        </Row>
        </div>
      )
    
        
    }
    


export default Current;