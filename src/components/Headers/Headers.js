import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Link, BrowserRouter, Route } from "react-router-dom";
// import Login from '../Login/Login';
// import PropsAndState from '../PropsAndState/PropsAndState';
// import SigninComponent from '../SigninComponent/SigninComponent';
// import SignUpComponent from '../SignupComponent/SignupComponent';
import "./Headers.css";
class Headers extends Component {
    render() {
        return (
            <div>
                <h1>Shopping app</h1>
                <div className="options">
                    <Link className="option" to="/signin">Signin</Link>
                    <Link className="option" to="/signup">Signup</Link>
                    <Link className="option" to="/login">Login</Link>
                    <Link className="option" to="/propsandstate">PropsAndState</Link>
                    <Link className="option" to="/lifecycle">Lifecycle</Link>
                    <Link className="option" to="/"></Link>
                    <Link className="option" to="/"></Link>
                </div>
            </div>
        )
    }
}
export default Headers

