import React, { useContext, useState } from 'react';
import Firebasecontext from '../Component_config/Context';
import Produit_anab from '../Component/steroide_anab.jpg';
import Produit_db from '../Component/steroide_db.jpg';
import Produit_igf from '../Component/steroide_igf.jpg';
import moncss from './Steroides.css';
import SteroidesInfos_un from './SteroidesInfos_un';
import SteroidesInfos_deux from './SteroidesInfos_deux';
import SteroidesInfos_trois from './SteroidesInfos_trois';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const tab_produit_un = [
  {id:1,image_un: Produit_anab,prix:'700 MAD'}
]
const tab_produit_deux = [
  {id:2,image_deux:Produit_db,prix: '600 MAD'}
]
const tab_produit_trois = [
  {id:3,image_trois : Produit_igf,prix : '500 MAD'}
]


const Steroides = (props) => {
      const Firebase=useContext(Firebasecontext);
      const [compteur_un,setCompteur_un]=useState(0);
      const [compteur_deux,setCompteur_deux]=useState(0);
      const [compteur_trois,setCompteur_trois]=useState(0);
      const [nom,setNom]=useState('');
      const [message,setMessage]=useState('');
      const [EditMode,setEditMode]=useState(false);
      const [EditMode_deux,setEditMode_deux]=useState(false);
      const [EditMode_trois,setEditMode_trois]=useState(false);
      const [Produit_un,setProduit_un]=useState(tab_produit_un);
      const [Produit_deux,setProduit_deux]=useState(tab_produit_deux);
      const [Produit_trois,setProduit_trois]=useState(tab_produit_trois);


      const ChangeMode= () => {
        if ( EditMode===false) {
          setEditMode(true);
        }else {
          setEditMode(false);
        }
        setCompteur_un(compteur_un+1);
      }
      const ChangeMode_deux= () => {
        if ( EditMode_deux===false) {
          setEditMode_deux(true);
        }else {
          setEditMode_deux(false);
        }
        setCompteur_deux(compteur_deux+1);
      }
      const ChangeMode_trois= () => {
        if ( EditMode_trois===false) {
          setEditMode_trois(true);
        }else {
          setEditMode_trois(false);
        }
        setCompteur_trois(compteur_trois+1);
      }

      const Supprimer_panier_un= () => {
        if ( EditMode===false) {
          setEditMode(true);
        }else {
          setEditMode(false);
        }
        setCompteur_un(compteur_un-1);
      }
      const Supprimer_panier_deux= () => {
        if ( EditMode_deux===false) {
          setEditMode_deux(true);
        }else {
          setEditMode_deux(false);
        }
        setCompteur_deux(compteur_deux-1);
      }
      const Supprimer_panier_trois= () => {
        if ( EditMode_trois===false) {
          setEditMode_trois(true);
        }else {
          setEditMode_trois(false);
        }
        setCompteur_trois(compteur_trois+1);
      }
      

      
      
      
      const Disconn = () => {
          Firebase.Disconnect()
          .then(user => {
            props.history.push('/');
          })
          .catch(error => {
              console.log(error);
          })
      }
      const Handlenom = (event) => {
         setNom(event.target.value);
      }
      const HandleMessage = (event) => {
        setMessage(event.target.value);
      }
      const Adddata = () => {
        Firebase.Additem(nom,message)
        .then(user => {
         setNom('');
         setMessage('');
         console.log("he informations is added");
        })
        .catch(error => {
        setNom('');
        setMessage('');
        console.log(error);
        })
      }
      
      

      
     
     return(
       <div className="page_steroides">  
        <button onClick={Disconn}> Deconnexion  </button>
        <br />
        <br />
        <ul>      
         <li><img src={Produit_anab} onClick={ChangeMode} /><input type="text" value={compteur_un} /><button onClick={Supprimer_panier_un}> - </button><br /></li>
         <li><img src={Produit_db} onClick={ChangeMode_deux}  /><input type="text" value={compteur_deux} /><button onClick={Supprimer_panier_deux}> - </button><br /></li>
         <li><img src={Produit_igf} onClick={ChangeMode_trois} /><input type="text" value={compteur_trois} /> <button onClick={Supprimer_panier_trois}> - </button><br /></li>
        </ul>
        <table border="3">
        <tr><th> Panier  </th> </tr>
        {
           EditMode ? Produit_un.map(item => <SteroidesInfos_un key={item.id} photo_un={item.image_un} prix_un={item.prix} /> )        : ''
        }
        {
          EditMode_deux ? Produit_deux.map(item =>  <SteroidesInfos_deux key={item.id} photo_deux={item.image_deux} prix_deux={item.prix} /> )   : ''
        }
        {
          EditMode_trois ? Produit_trois.map(item =>  <SteroidesInfos_trois key={item.id} photo_trois={item.image_trois} prix_trois={item.prix} />) : ''
        }
        </table>
        <section>
        <h1> Contactez-nous   </h1>
        <label> Nom :  </label><input type="text" placeholder="entrer votre nom" value={nom} onChange={Handlenom} />
        <label> Message :   </label><input type="text" placeholder="entrer votre message" value={message} onChange={HandleMessage} /><br />
        <button onClick={Adddata}> Envoyer  </button>
        </section>
        
        
        
        <br />
        <br />
        <Link to={{pathname:'/Home'}} >
        Previous
        </Link>


       </div>
     )
}

export default Steroides;