import React, { useState } from 'react'
//import { Link, useHistory } from 'react-router-dom'; useHistory got replaced by useNavigate in react-router-dom
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase'

function Login() {
  
  const navigate = useNavigate();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    // some fancy fire base login shittt
    auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // history.push('/') because of use history user previously i have faced issue google and find the below resolution
                navigate('/')
            })
            .catch(error => alert(error.message))
  } 

  const register = e => {
    e.preventDefault();
    //some fancy fire base register 
    auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                // it successfully created a new user with email and password
                if (auth) {
                    // history.push('/') because of use history user previously i have faced issue google and find the below resolution
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
  }
  
  
  return (
    <div className='login'>
    
    <Link to='/'>
      <img 
        className='login__logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
        alt='' 
      />
    </Link>
    
    <div className='login__container'>
      
      <h1>Sign-In</h1>
      
      <form>
        <h5>Email (phone for mobile accounts)</h5>
        <input type='text' value={email} onChange={e =>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button className='login__signInButton' type='submit' onClick={signIn}>Sign-In</button>
      </form>
      
      <p>By continuing, you are agree to Amazon's Condition of use and Privacy Notice</p>
      
      <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
    
    </div>
    </div>
  )
}

export default Login