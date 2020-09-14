import React, { useState } from 'react';
import moncss from './Another.css';

const Tab_produits = [
    {id:'1D',nom_produit:'checker',prix:130},
    {id:'2D',nom_produit:'bcaa',prix:150}
]

const AnotherProduit = () => {
    const [Produit,setProduit]=useState(Tab_produits);
    const [critere,setCritere]=useState('');
    const [Results,setResults]=useState('');

const HandleChange = (event) => {
   setCritere(event.target.value);
} 
const Found = (event) => {
   event.preventDefault();
   const newProduit =Produit.filter(item =>  {
       if(item.id===critere){
         setResults(item.nom_produit);
       }
       return item;
   })
   setProduit(newProduit);
   setCritere('');
}   
    return(
        <div className="page">
         <label> ID :  </label><input type="text" value={critere} onChange={HandleChange} /><button onClick={Found}> Search  </button>
         <p> {Results} </p>
        </div>
    )
}
export default AnotherProduit;