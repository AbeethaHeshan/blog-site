import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function Footer() {
  return (
    <footer className="bg-dark text-light">
    <Container>
      <Row>
        <Col md={6} >
          <h5 style={{marginTop:'10px'}}>About Us</h5>
          <p>This is a sample footer created using React Bootstrap. Design and Developed by Abeetha Heshan</p>
        </Col>
        <Col md={6} >
          <h5 style={{marginTop:'10px'}}>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: abeethaheshan400@gmail.com</li>
            <li>Phone: +941212121212</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>&copy; 2024 ABC Company. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
