import React from 'react';
import { Container, Navbar, Nav, Row, Form, NavDropdown, FormControl, Image, Button, Col } from 'react-bootstrap';
import './navbar.css';

function NavbarComponent(props){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img className="logo" src="./icon.svg" />PiperXend</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link" onClick={props.actions[1]}>Register</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Careers</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onClick={props.actions[0]}>Login</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar> 
        )
    }

export default NavbarComponent;
