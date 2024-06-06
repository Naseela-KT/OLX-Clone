import React, { useContext, useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { validate } from './signupValidation';

export default function Signup() {
  const initialValues={username:'',email:'',phone:'',password:''}
  const history=useHistory()
  const [formValues,setFormValues]=useState(initialValues)
  const [formErrors,setFormErrors]=useState('')
  const {firebase}=useContext(FirebaseContext)

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormValues({...formValues,[name]:value})
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    const errors=validate(formValues)
    setFormErrors(errors)
      if(Object.keys(errors).length===0){
      firebase.auth().createUserWithEmailAndPassword(formValues.email,formValues.password).then((result)=>{
    result.user.updateProfile({displayName:formValues.username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:formValues.username,
        phone:formValues.phone
      }).then(()=>{
        history.push("/login")
      })
    })
  })
    }
   
  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="180px" height="180px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <input
          placeholder='Username'
            className="input"
            type="text"
            value={formValues.username}
            onChange={handleChange}
            id="username"
            name="username"
          />
          <p style={{color:'red'}} className='font-sm'>{formErrors.username}</p>
         {/* <br/>
        */}
          <input
          placeholder='Email'
            className="input"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            id="email"
            name="email"
          />
          <p style={{color:'red'}}>{formErrors.email}</p>
          {/* <br/> */}
   
          <input
          placeholder='Phone'
            className="input"
            type="number"
            value={formValues.phone}
            onChange={handleChange}
            id="phone"
            name="phone"
          />
         <p style={{color:'red'}}>{formErrors.phone}</p>
         {/* <br/> */}
       
          <input
          placeholder='Password'
            className="input"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            id="password"
            name="password"
          />
          <p style={{color:'red'}}>{formErrors.password}</p>

          <button>Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
