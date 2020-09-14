import React, { Component } from 'react';
import Photodeux from './suplement_deux.jpg';
import moncss from './Home.css';

class Homepropsphotodeux extends Component {
    render(){
        return(
            <div>
            <img src={Photodeux} id="image_deux" />
            </div>
        )
    }
}
export default Homepropsphotodeux;