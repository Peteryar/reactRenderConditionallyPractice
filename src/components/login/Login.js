import React from 'react';
import { Container, Navbar, Nav, Row, Form, NavDropdown, FormControl, Image, Button, Col } from 'react-bootstrap';
import './login.css';

const Login = (props)=>{
    let image={
        src:"./assets/no_user.png"
    }
    return(
    <div>
            <div className="login">
                <section className="addImage">
                  <img src="./no_user.png"/>
                </section>
                <form>
                    <input type="email" placeholder="Enter email"/>
                    <input type="password" placeholder="Enter password"/>
                </form>
                <div className="button"><Button center>Login</Button><p>Forget Password?</p></div>
                

            </div>
            
      </div>
      )
}

export default Login;
