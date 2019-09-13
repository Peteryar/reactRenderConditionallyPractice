import React from 'react';
import { Container, Navbar, Nav, Row, Form, NavDropdown, FormControl, Image, Button, Col } from 'react-bootstrap';
import './body.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <Container className="con">
        <Row>
          <Col className="column1">
            <h1>Welcome to PiperXend, Making Technology Accessible all over Africa</h1>
            <h5>We spent our resource, time and values on Solving Africa's Problems with Technology! We Equip our team with latest  technologies in trying to solve all of Africa's Problems.</h5>
            <Button className="button">Join Our Team</Button>
          </Col>
          <Col className="column2">
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Body;