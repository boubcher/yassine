import React from 'react';

const Suplement_trois = (props) => {
    return(
        <div>
        <table border="3">
        <tr> <th> Image   </th><th> Prix  </th>  </tr>    
        <tr><td><img src={props.image_trois} /></td><td>{props.price_trois}</td></tr>
        </table>
        </div>
    )
}
export default Suplement_trois;