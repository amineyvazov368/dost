import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './conponents/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from './conponents/Title';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
         <Nav/>
     <Container>

     
      <Row>
        <Col xs={6}><Title/></Col>
        
      </Row>
    </Container>
      
    </>
  )
}

export default App
