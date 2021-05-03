import React from 'react';
import { useHistory } from "react-router-dom";
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
        <div>
            <form onSubmit={onclicksubmit}>
                <div className="signin_div">
                    <h1>Login</h1>
                    <label htmlFor="signin_username">Username</label>
                    <input type="text" name="signin_username" id="signin_username_id" placeholder="Enter Email" />
                    <label htmlFor="signin_password">Password</label>
                    <input type="password" name="signin_password" id="signin_password_id" placeholder="Enter Password" />
                    <button type="submit" >LOGIN</button>
                </div>
            </form>
            <button onClick={onclicksignup}>Signup</button>
            <button onClick={onclicksignin}>Signin</button>
        </div>
    )
}
export default Login