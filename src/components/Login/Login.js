import React from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";
function Login() {
    let history = useHistory();
    const onclicksubmit = (e) => {
        console.log("Inside onclicksubmit ");
        e.preventDefault();
    }
    const onclicksignup = (e) => {
        e.preventDefault();
        history.push("/signup");
    }
    const onclicksignin = (e) => {
        history.push("/signin");
    }
    return (
        <div className="logincls">
            <h1>Login</h1>
            <form method="post" onSubmit={onclicksubmit}>
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit">Log in.</button>
            </form>
            <button onClick = {onclicksignin}>Signin</button>
            <button onClick = {onclicksignup}>Signup</button>
        </div>
    )
}
export default Login