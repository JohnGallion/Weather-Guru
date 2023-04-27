import React from "react";
import { useState } from "react";
import bootstrap from 'bootstrap'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";



function Search() {
    const [query,setQuery] = useState("");
    const [error, setError] = useState("");
    const [weather, setWeather] = useState({});

    return (
        

      <div  className="Search">
        <header >
        <h1>Weather Guru</h1>
        </header>
        <Container >
          <Row><input type="text" placeholder='Search by City' onChange={(e) => setQuery(e.target.value)} value={query}></input></Row>
          <Row><Button variant="primary" onClick={Search} >Get Weather</Button></Row>
        </Container>
  
      </div>
    );
  }


export default Search;