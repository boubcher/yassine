import React from 'react';

const Suplement_deux = (props) => {
    return(
        <div>
        <table border="3">
        <tr> <th> Image   </th><th> Prix  </th>  </tr>    
        <tr><td><img src={props.image_deux} /></td><td>{props.price_deux}</td></tr>
        </table>    
        </div>
    )
}
export default Suplement_deux;