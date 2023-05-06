import React, {useEffect, useState} from "react";
import './weather.css'
import bootstrap from 'bootstrap'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Forecast from "./forecast";
import Donate from "./donate";




   


const Weather = () => {

    let [city, setCity] = useState('');
    let [error, setError] = useState('');
    let [responseObj, setResponseObj] = useState({});

       function getWeather(e) {
        e.preventDefault();
        
        if (city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});

        const userCity = encodeURIComponent(city)
       
           fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${userCity}`, { method: 'GET',
           headers: {
               'X-RapidAPI-Key': '8942028294msh261be75419f76e2p171bf3jsn134222a754ec',
               'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
           }
       })
    
            .then(response => response.json())
                
            .then(response => {setResponseObj(response)})

            
            
        }
           
          
           
                return (
           <div  className="Search">
            <header >
            <h1>Weather Guru</h1>
            </header>
            <Container >
                <form >
                    <input type="text" placeholder="City, State (Atlanta, GA)" value={city} onChange={(e) => setCity(e.target.value)}/>
                    <Row><Button variant="primary" type="submit" onClick={getWeather}>Search</Button></Row>
                </form>
            </Container>
            <Card className="mt-3">
            <Card.Body >
                {responseObj.location != undefined && <Forecast responseObj = {responseObj}/>}
                {/* {JSON.stringify(responseObj)} */}
            </Card.Body>
            <Card.Footer className="text-center fs-6">
                <p><small>Powered by WeatherApi.com</small></p>
                <Donate />
            </Card.Footer>
          </Card>  
          </div>
          )
}


export default Weather;
