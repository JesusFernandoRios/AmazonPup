import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import "./styling/login.css"
import {auth} from './config/firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()
        // loging logic here
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            // once successful redirect to homepage
            history.push('/')
        }).catch((e) => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault()
        // register logic here
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // create use and logged in, redirect to homepage
            history.push("/");
            
        }).catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className ="login__logo" src="http://pngimg.com/uploads/dog/dog_PNG50260.png" alt="logo puppy!"></img>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to enjoy all the dog images available on this site</p>

                <button onClick={register} className="login__registerButton">Create an Account</button>
            </div>
        </div>
    )
}

export default Login;
