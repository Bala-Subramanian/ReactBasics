import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from "react-router-dom";
import Login from '../Login/Login';
import PropsAndState from '../PropsAndState/PropsAndState';
import SigninComponent from '../SigninComponent/SigninComponent';
import SignUpComponent from '../SignupComponent/SignupComponent';
class Headers extends Component {
    render() {
        return (
            <div>
                <h1>Shopping app</h1>
                <div className="options">
                    <Link className="option" to="/signin">SIGNIN</Link>
                    <Link className="option" to="/signup">SIGNUP</Link>
                    <Link className="option" to="/login">LOGIN</Link>
                    <Route exact path="/"><PropsAndState prop1="Parameter1"></PropsAndState></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/signin"><SigninComponent/></Route>
                    <Route path="/signup"> <SignUpComponent/> </Route>
                </div>
            </div>
        )
    }
}
export default Headers

