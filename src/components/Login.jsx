import React from 'react'
import {Link} from "react-router-dom"
import "./styling/login.css"

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className ="login__logo" src="http://pngimg.com/uploads/dog/dog_PNG50260.png" alt="logo puppy!"></img>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email"></input>
                    <h5>Password</h5>
                    <input type="password"></input>
                    <button className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to enjoy all the dog images avaliable on this website</p>

                <button className="login__registerButton">Create an Account</button>
            </div>
        </div>
    )
}

export default Login;
