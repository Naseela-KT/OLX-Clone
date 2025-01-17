import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
    <Post>
    <BrowserRouter>
      <Route exact path='/' ><Home /></Route>
      <Route path='/signup'><Signup /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/create'><Create /></Route>
      <Route path='/view'><View /></Route>
      </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
