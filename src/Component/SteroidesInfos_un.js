import React from 'react';


const SteroidesInfos_un = (props) => {
    return(
      <div>
          <table border="3">
          <tr> <th> Photo  </th><th> Prix  </th>  </tr>
          <tr><td><img src={props.photo_un} /></td><td>{props.prix_un}</td></tr>
          </table>

      </div>
    )
}
export default SteroidesInfos_un;