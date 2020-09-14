import React, { Component } from 'react';
import Shoping from './logoshoping.png';
import moncss from './Home.css';
import {FaShoppingCart} from 'react-icons/fa';
import Userimage from './userimage.jpg';
import Suplements_un from './Suplement_un.jpg';
import Suplement_deux from './suplement_deux.jpg';
import Suplement_trois from './Suplement_trois.jpg';
import Suplement_quatre from './Suplement_quatre.jpg';
import Homepropsphotoun from './Homepropsphotoun';
import Homepropsphotodeux from './Homepropsphoto_deux';
import Homepropsphototrois from './Homepropsphoto_trois';
import Homepropsphotoquatre from './Homepropsphoto_quatre';
import Mega_mass from '../Component/mega_mass.jpg';
import Anabolic_amino from '../Component/anabolic_amino.jpg';
import Image_dymatized from '../Component/image_dymatized.png';
import Wianabol from '../Component/wianabol.jpg';
import Zmatack from '../Component/zmatack.jpg';
import Tribooster from '../Component/triboster.png';
import Gants from '../Component/gant_musculation.jpg';
import Halteres from '../Component/halteres.png';
import Chaise from '../Component/chaise.jpg';
import {FaSistrix} from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Firebase from '../Component_config/FirabaseConfig';

const Produits_materiels = [
    {nom:'Anabolic amino',image:Anabolic_amino,prix:'350 MAD'},
    {nom:'chaise',image:Chaise,prix:'3000 MAD'},
    {nom:'gants',image:Gants,prix:'150 MAD'},
    {nom:'halteres',image:Halteres,prix:'1000 MAD'},
    {nom:'Wianabol',image:Wianabol,prix:'400 MAD'}
]

class Home extends Component {
    constructor () {
        super();
        this.state={
            EditMode_un : true,
            EditMode_deux : true,
            EditMode_trois : true,
            EditMode_quatre : true,
            Tab_produit_materiels : Produits_materiels,
            results : '',
            results_prix:'',  
            valeur_input : '',
            Editer : true,
            message_erreur : ''
        }
    }

    Search_produit_materiels = () => {
        const newProduit_materiel=this.state.Tab_produit_materiels.filter(item =>{
           if(item.nom===this.state.valeur_input){
               this.setState({results: item.image,results_prix : item.prix})
               this.HandleChangeEditer();
           }else {
              this.setState({
                  message_erreur : "Produit non trouvé"
              })
           }
           return item;
        })
        this.setState({
            Tab_produit_materiels : newProduit_materiel,
            valeur_input : ''
        })
    }
    HandleChangeEditer = () => {
        if(this.state.Editer===true){
            this.setState({Editer : false})
        }else {
            this.setState({Editer:true})
        }
    } 
    HandleChangeInput = (event) => {
        this.setState({
            valeur_input : event.target.value
        })
    }
    
    ChangerMode_un = () => {
        if(this.state.EditMode_un===true){
            this.setState({
                EditMode_un : false
            })
        }else {
            this.setState({
                EditMode_un : true
            })
        }
    }
    ChangerMode_deux = () => {
        if(this.state.EditMode_deux===true){
            this.setState({
                EditMode_deux : false
            })
        }else {
            this.setState({
                EditMode_deux : true
            })
        }
    }
    ChangerMode_trois = () => {
        if(this.state.EditMode_trois===true){
            this.setState({
                EditMode_trois : false
            })
        }else {
            this.setState({
                EditMode_trois : true
            })
        }
    }
    ChangerMode_quatre = () => {
        if(this.state.EditMode_quatre===true){
            this.setState({
                EditMode_quatre : false
            })
        }else {
            this.setState({
                EditMode_quatre : true
            })
        }
    }
    
    render(){
        return(
            <div className="page">
                <nav> 
                <ul type="none">
                <li><img src={Shoping} id="logo" /></li> 
                <li>
                 <Link to={{pathname:'/Suplement'}} >
                 Suplement 
                 </Link>

                </li>
                <li> 
                <Link to={{
                    pathname : '/Steroides'
                }} >   
                Steroides        
                </Link>
                </li>
                <li><input type="text" placeholder="Search for suplements or steroides" value={this.state.valeur_input} onChange={this.HandleChangeInput} /><button onClick={this.Search_produit_materiels}><FaSistrix /></button></li>
                <li><FaShoppingCart id="iconpanier" /></li> 
                <li> <img src={Userimage} id="user" />
                </li> 
                </ul> 
                <br /><br />
                {
                !this.state.Editer ?    
                <table border="3">
                <tr><th> Photo  </th><th> Prix  </th></tr>
                <tr><td><img src={this.state.results} /></td><td>{this.state.results_prix}</td></tr>   
                </table> : <p>{this.state.message_erreur} </p>
                 }   
                </nav>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="todolist">
                {
                    !this.state.EditMode_un ? <Homepropsphotoun /> : ''
                }
                {
                    !this.state.EditMode_deux ? <Homepropsphotodeux /> : ''
                }
                {
                    !this.state.EditMode_trois ? <Homepropsphototrois /> : ''
                }
                {
                    !this.state.EditMode_quatre ? <Homepropsphotoquatre /> : ''
                }
                </div>
                <ul className="photoslist">
                <li><a href="#"> <img src={Suplements_un} className="photos" onClick={this.ChangerMode_un}  /> </a> </li>
                <li><a href="#"><img src={Suplement_deux} className="photos" onClick={this.ChangerMode_deux}  /></a></li>
                <li><a href="#"><img src={Suplement_trois} className="photos" onClick={this.ChangerMode_trois} /></a></li>
                <li><a href="#"><img src={Suplement_quatre} className="photos" onClick={this.ChangerMode_quatre}  /></a> </li>
                </ul>
                <h1> Proteins </h1>
                <ul>
                 <li><img src={Mega_mass} />
                 <p> Prodeit   </p>
                 <span> 500 MAD   </span>
                 </li>
                 <li><img src={Anabolic_amino} />
                 <p> Optimum nutrition   </p>
                 <span> 350 MAD   </span>
                 </li>
                 <li><img src={Image_dymatized} />
                 <p> Dymatized   </p>
                 <span> 900 MAD   </span>
                 </li>
                 </ul>
                 <h1> Stimulants hormonaux  </h1>
                 <ul>
                 <li>
                <img src={Wianabol} />  
                <p> Optimum nutrition   </p> 
                <span> 500 MAD    </span>        
                </li>
                 <li>        
                 <img src={Tribooster} />
                 <p> Optimum nutrition   </p>
                 <span> 400 MAD   </span> 
                 </li>
                 <li>        
                 <img src={Zmatack} />
                 <p> Optimum nutrition   </p>
                 <span> 550 MAD   </span> 
                 </li>
                </ul>
                <h1> Accessoires de musculation   </h1>
                <ul>
                <li><img src={Halteres} />  
                <p> Haltéres    </p>
                <span> A partir de 1000 MAD  </span>
                </li>
                <li><img src={Chaise} /> 
                <p> Chaise pour exercices abdos  </p>
                <span> 3000 MAD   </span>
                </li>
                <li> <img src={Gants} /> 
                <p> Gants de musculation </p>
                <span> 150 MAD  </span>
                </li>
                </ul>

               
            </div>
        )
    }
}
export default Home;