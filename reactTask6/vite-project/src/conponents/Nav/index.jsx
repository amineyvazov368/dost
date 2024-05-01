import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Style from './index.module.css' 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function index() {
  return (
    <div className={Style.big}>
        <Navbar className="bg-body-tertiary">
    <Container className={Style.container}>
      <Navbar.Brand href="#home">Start Bootstrap
</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
       <ul  className={Style.list}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Services</a></li>
       </ul>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default index