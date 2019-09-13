import React from 'react';
import Body from '../components/body/Body';
import NavBarComponent from '../components/navbar/NavBar';
import Login from '../components/login/Login';
import Register from '../components/appliform/AppliForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPage: false,
            register: false,
        }
        this.renderLogin = this.renderLogin.bind(this)
        this.renderRegister= this.renderRegister.bind(this)
    }
    renderLogin(){
        this.setState({
            loginPage:true,
            register:false,
        })
        alert('Hey I am Login, why did you clicked me!')
    }
    renderRegister(){
        this.setState({
            loginPage:false,
            register:true,
        })
        alert('Hey I am Register!')
    }
    render() {
        if(this.state.loginPage&&!this.state.register){
            return (
                <div>
                    <NavBarComponent actions={[this.renderLogin,this.renderRegister]}/>
                    <Login />
                </div>
            )
        }else if(!this.state.loginPage&&this.state.register){
            return(
                <div>
                    <NavBarComponent actions={[this.renderLogin,this.renderRegister]}/>
                    <Register />
                </div>
            )
        }else{
            return(
                <div>
                    <NavBarComponent  actions={[this.renderLogin,this.renderRegister]}/>
                    <Body />
                </div>
            )
        }
        }
        
    }

export default App;