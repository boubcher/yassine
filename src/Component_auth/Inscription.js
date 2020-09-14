import React, { useContext, useState } from 'react';
import Firebasecontext from '../Component_config/Context';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import moncss from './Inscription.css';

const Inscription = (props) => {

    const Firebase=useContext(Firebasecontext);
    const [pseudo,setPseudo]=useState('');
    const [email,setEmail]=useState('');
    const [mdp,setMdp]=useState('');
    const [confirmmdp,setconfirmmdp]=useState('');
    const [message_erreur,setMessage_erreur]=useState('');

    const Handlechangepseudo = (event) => {
         setPseudo(event.target.value);
    }
    const Handlechangeemail = (event) => {
        setEmail(event.target.value);
    }
    const Handlechangepassword = (event) => {
    setMdp(event.target.value);
    }
    const Handlechangeconfirmmdp = (event) => {
        setconfirmmdp(event.target.value);
    }
    const HandleSubmit= (event) => {
         event.preventDefault();
         Firebase.Subscribe(email,mdp)
         .then(user => {
            props.history.push('/'); 
            console.log("Inscrit");
            setPseudo('');
            setEmail('');
            setMdp('');
            setconfirmmdp('');

         })
         .catch(error => {
             console.log(error);
             setPseudo('');
             setEmail('');
             setMdp('');
             setconfirmmdp('');
         })
    }

    
     
     return(
         
        <form onSubmit={HandleSubmit}>
         <h1> Inscrivez vous  </h1>
         <label> Pseudo :  </label><input type="text" placeholder="entrer un pseudo" value={pseudo} onChange={Handlechangepseudo} /><br />
         <label> Email :  </label><input type="email" placeholder="entrer un email" value={email} onChange={Handlechangeemail} /> <br />
         <label> Password :  </label><input type="password" placeholder="entrer un password" value={mdp} onChange={Handlechangepassword} /> <br />
         <label> Confirmer votre password :  </label><input type="password" placeholder="confirmer votre password" value={confirmmdp} onChange={Handlechangeconfirmmdp} /> <br />
         <button>  Inscrire  </button><br />
         <Link to={{pathname:'/'}}>
          Deja inscrit ? Connectez vous 
         </Link>
         
         </form>
         
     )
}
export default Inscription;