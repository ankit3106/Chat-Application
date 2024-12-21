import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup , login } from '../../config/firebase'
import { toast } from 'react-toastify'

const Login = () => {

    const [currState, setCurrState] = React.useState("Sign up");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault(); // Prevent from reloading the page
        if(currState === "Sign up"){
            signup(username, email, password); // Call signup function from firebase.js
        }
        else{
            login(email, password); // Call login function from firebase.js
        }
    }

    return (
        <div className='login'>
            <img src={assets.logo_big} alt="" className='logo' />
            <form onSubmit={onSubmitHandler} className='login-form'>
                <h2>{currState}</h2>
                {currState === "Sign up" ? <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='username' className='form-input' required /> : null}
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder='Email address' className='form-input' required />
                <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='password' className='form-input' required />
                <button type='submit'>{currState === "Sign up" ? "Create account" : "Login now"}</button>
                <div className="login-term">
                    <input type="checkbox" />
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>
                <div className="login-forgot">
                    {currState === "Sign up" ?
                        <p className="login-toggle">Already have an account <span onClick={() => setCurrState("Login")}>Login</span></p> 
                        :
                        <p className="login-toggle">Create an account<span onClick={() => setCurrState("Sign up")}>click here</span></p>}
                </div>
            </form>
        </div>
    )
}

export default Login