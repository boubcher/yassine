import React, { useState, useContext } from 'react';
import FirebaseContext from '../Component_config/Context';
import moncss from './Connexion.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Connexion = (props) => {
  const [login,setLogin]=useState('');
  const [password,setPassword]=useState('');
  const Firebase=useContext(FirebaseContext);
  const handleChangelogin = (event) => {
      setLogin(event.target.value);
  }
  const handleChangepassword = (event) => {
      setPassword(event.target.value);
  }
  const handleSubmitLogin = (event) => {
      event.preventDefault();
      Firebase.Login(login,password)
      .then(user => {
         props.history.push('/Home');
      })
      .catch(error => {

      })

  }
  return(
      <form onSubmit={handleSubmitLogin}>
      <h1> Bienvenue Veuillez vous connecter pour acceeder a votre espace  </h1>
      <label> Login </label><input type="email" placeholder="entrer votre login" value={login} onChange={handleChangelogin} /> <br />
      <label> Password </label><input type="password" placeholder="entrer votre password" value={password} onChange={handleChangepassword} /><br /><br />
       <button> Entrer  </button><br />
       <Link to={{pathname:'/Inscription'}}>
       Subscribe 
       </Link>
      </form>
  )
}
export default Connexion;