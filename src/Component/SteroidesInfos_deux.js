import React from 'react';


const SteroidesInfos_deux = (props) => {
    return(
      <div>
           <table border="3">
          <tr> <th> Photo  </th><th> Prix  </th>  </tr>
          <tr><td><img src={props.photo_deux} /></td><td>{props.prix_deux}</td></tr>
          </table>
          
      </div>
    )
}
export default SteroidesInfos_deux;