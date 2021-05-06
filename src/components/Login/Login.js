import React from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";
function Login() {
    let history = useHistory();
    const onclicksubmit = (e) => {
        console.log("Inside onclicksubmit ");
        e.preventDefault();
    }
    const onclickUserlist = (e) => {
        e.preventDefault();
        history.push("/Userlist");
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
            <button onClick = {onclickUserlist}>Userlist</button>
        </div>
    )
}
export default Login