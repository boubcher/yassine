import React from 'react';


const SteroidesInfos_trois = (props) => {
    return(
      <div>
           <table border="3">
          <tr><th>Photo</th><th> Prix </th></tr>
          <tr><td><img src={props.photo_trois} /></td><td>{props.prix_trois}</td></tr>
          </table>
          
      </div>
    )
}
export default SteroidesInfos_trois;