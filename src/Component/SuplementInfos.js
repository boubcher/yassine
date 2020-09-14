import React from 'react';


const SuplementInfos = (props) => {
   return(
       <div>
         <table border="3">
         <tr> <th> Image   </th><th> Prix  </th>  </tr>    
          <tr><td><img src={props.image} /></td><td>{props.price}</td></tr>
        </table>
       </div>
   )
} 
export default SuplementInfos;