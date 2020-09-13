import React from 'react';
import mncss from './propsdataform.css';

const Builderfrom = (props) => {
    return(
        <div>
           
         <table border="3">
         <tr><th> ID </th><th> NOM </th><th> AGE </th><th> PRENOM </th></tr>
         <tr> <td> {props.todo.ID} </td> <td> {props.todo.nom} </td> <td> {props.todo.age} </td> <td> {props.todo.prenom}</td>   </tr> 
         </table>
       
        </div>
    )
}
export default Builderfrom; 