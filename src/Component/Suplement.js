import React, { useState, useContext } from 'react';
import Wheyprotein from '../Component/whey_isolate.jpg';
import Arginine from '../Component/Arginine.jpg';
import Herbafile from '../Component/herbafile.jpg';
import Suplementcss from '../Component/Suplement.css';
import FirebaseContext from '../Component_config/Context';
import SuplementInfos from './SuplementInfos';
import SuplementInfos_deux from './SuplementInfos_deux';
import SuplementInfos_trois from './SuplementInfos_trois';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const tabProduit = [
    {id:1,image_un:Wheyprotein,prix:'700 MAD'}
]
const tabProduit_un=[
    {id:1,image_deux:Arginine,prix_un:'250 MAD'}
]
const tabProduit_deux=[
    {id:1,image_trois: Herbafile,prix_deux:'400 MAD'}
]


const Suplement = (props) => {
    
    const [nom,setNom]=useState('');
    const [message,setMessage]=useState('');
    const Firebase=useContext(FirebaseContext);
    const [EditMode,setEditMode]=useState(false);
    const [Editermode,setEditerMode]=useState(false);
    const [EditerMde,setEditerMde]=useState(false);
    const [tab,setTab]=useState(tabProduit);
    const [compteur,setCompteur]=useState(0);
    const [compteur_un,setCompteur_un]=useState(0);
    const [compteur_deux,setCompteur_deux]=useState(0);

    const HandleNom = (event) => {
        setNom(event.target.value);
    }
    const HandleMessage = (event) => {
        setMessage(event.target.value);
    }
    const ChangerMode = () => {
        if(EditMode===false) {
            setEditMode(true);
            setCompteur(compteur+1);
        }else {
            setEditMode(false);
        }
    }
    const ChangerMode_un = () =>{
        if(Editermode===false){
            setEditerMode(true);
            setCompteur_un(compteur_deux+1);
        }else {
            setEditerMode(false);
        }
    }
    const ChangerMode_deux = () => {
        if(EditerMde===false) {
            setEditerMde(true);
            setCompteur_deux(compteur+1);
        }else {
            setEditerMde(false);
        }
    }
    const Supprimer_du_panier_un = () => {
        if(EditMode===false) {
            setEditMode(true);
            
        }else {
            setEditMode(false);
        }
        setCompteur(compteur-1);
    }
    const Supprimer_du_panier_deux = () => {
        if( Editermode===false) {
            setEditerMode(true);
            
        }else {
            setEditerMode(false);
        }
        setCompteur_un(compteur_un-1);
    }
    const Supprimer_du_panier_trois = () => {
        if( EditerMde===false) {
            setEditerMde(true);
            
        }else {
            setEditerMde(false);
        }
        setCompteur_deux(compteur_deux-1);
    }

    
    
    const Submitdisconet = () => {
        Firebase.Disconnect()
        .then(user => {
          props.history.push('/');
        })
        .catch(error => {
         console.log(error);
        })
    }
    const AddMessage = () => {
        Firebase.Additem(nom,message)
        .then(user => {
          setNom('');
          setMessage('');
        })
        .catch(error => {
            console.log(error);
            setNom('');
          setMessage('');
        })

    }
    


    return(
        <div className="suplement-page">
            <h1>  Food suplements  </h1>
            <button onClick={Submitdisconet} id="delog"> Deconnexion  </button>
            <ul type="none">   
             <li> <img src={Wheyprotein} onClick={ChangerMode} /><input type="text" value={compteur} /><button onClick={Supprimer_du_panier_un}> - </button> 
             </li><br />
             <br />
             <li> <img src={Arginine} onClick={ChangerMode_un} /><input type="text" value={compteur_un} /><button onClick={Supprimer_du_panier_deux}> - </button> 
             </li><br />
             <br />
             <li> <img src={Herbafile} onClick={ChangerMode_deux} /><input type="text" value={compteur_deux} /><button onClick={Supprimer_du_panier_trois}> - </button> 
             
             </li>
            </ul>
            <table border="3">
            <tr><th> Panier </th></tr>
            <tr> 
            <td>
            {
               EditMode ? tabProduit.map(item => <SuplementInfos key={item.id} image={item.image_un} price={item.prix}   />) : ''
            }
            {
                Editermode ? tabProduit_un.map(item => <SuplementInfos_deux key={item.id} image_deux={item.image_deux} price_deux={item.prix_un} />) : ''
            }
            {
                EditerMde ? tabProduit_deux.map(item => <SuplementInfos_trois key={item.id} image_trois={item.image_trois} price_trois={item.prix_deux} />) : ''
            }
            </td> 
            </tr>
            </table>
            <section>
              <h1> Contactez nous   </h1>
              <label> Nom :   </label><input type="text" placeholder="entrer votre nom" value={nom} onChange={HandleNom} />
              <label> Message :   </label><input type="text" placeholder="entrer votre message" value={message} onChange={HandleMessage} />
              <button onClick={AddMessage}> Envoyer  </button>
            </section>
            <Link to={{pathname:'/Home'}} >
             Previous
            </Link>

        </div>
    )
}
export default Suplement;