import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const [loginError,setLoginError]=useState('')
  const history=useHistory()

  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch(error=>
      {
        console.log(error.message)
        setLoginError("Invalid login credentials!")
      }
      )
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="180px" height="180px" src={Logo} alt=''/>
        <form onSubmit={handleLogin}>
          <p style={{color:'red'}}>{loginError}</p>
          <input
          placeholder='Email'
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value);setLoginError('')}}
            id="fname"
            name="email"
            defaultValue="John"
          />
          
          <br />
          <input
          placeholder='Password'
            className="input"
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value);setLoginError('')}}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
