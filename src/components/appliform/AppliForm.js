import React from 'React';
import { Container, Navbar, Nav, Row, Form, NavDropdown, FormControl, Image, Button, Col } from 'react-bootstrap';
import './appliform.css';

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className="register">
                <Col>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" />

                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                         </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Container>
        )
    }
}

export default Registration;