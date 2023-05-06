import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Weather from './components/display';
import Forecast from './components/current';
import responseObj from './components/display';




function App() {
  return(
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card className='mt-5'>
            <Card.Body><Weather /></Card.Body>
          </Card>               
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}


export default App;
