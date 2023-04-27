import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './components/search';
import Card from 'react-bootstrap/Card';

function App() {
  return(
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Card.Body><Search /></Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}


export default App;
