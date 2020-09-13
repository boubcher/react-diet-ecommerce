import React, { useState, useContext } from 'react';
import FirebaseContext from '../Firebasecomponent/Context'; 
import Builderfrom from './propsdataform';

const BodybuilderDatabase = () => {
    const [ID,setID]=useState('');
    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [age,setAge]=useState('');
    const Firebase=useContext(FirebaseContext);
    const [tabuser,settabUser]=useState({});

    const HandlechangeID = (event) => {
        setID(event.target.value);
    }
    const HandlechangeNom = (event) => {
        setNom(event.target.value);
    }
    const HandlechangePrenom = (event) => {
        setPrenom(event.target.value);
    }
    const HandlechangeAge = (event) => {
        setAge(event.target.value);
    }
    

    const Addbuilder = () => {
        Firebase.AddData(ID,nom,prenom,age)
        .then(user => {
            console.log('Ajouter');
            setID('');
            setNom('');
            setPrenom('');
            setAge('');
        })
        .catch(error => {
            console.log(error);
            setID('');
            setNom('');
            setPrenom('');
            setAge('');
        })
    }

    const Add = () => {
        Firebase.Dataadd(ID,nom,prenom,age)
        .then(user => {
            console.log('added');
            setID('');
            setNom('');
            setPrenom('');
            setAge('');
        })
        .catch(error => {
            console.log(error);
            setID('');
            setNom('');
            setPrenom('');
            setAge('');

        })
    }
    const Search = () => {
        Firebase.Backup()
        .then( (doc) =>   { 
         console.log(doc.data());
         let newitem=doc.data();
         settabUser(newitem);
         
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return(
        <div> 
          
          <label> ID bodybuilder : </label><input type="text" placeholder="entrer le identifiant" value={ID} onChange={HandlechangeID} />
          <label> Nom bodybuilder : </label><input type="text" placeholder="entrer le nom" value={nom} onChange={HandlechangeNom} />
          <label> Prénom bodybuilder : </label><input type="text" placeholder="entrer le prénom" value={prenom} onChange={HandlechangePrenom} />
          <label> Age bodybuilder : </label><input type="text" placeholder="entrer le age" value={age} onChange={HandlechangeAge} />
          <button onClick={Add}> ADD   </button>
          <button onClick={Search}> Search  </button>
          <br />
          <br />
           <Builderfrom todo={tabuser} />
           
        </div>
    )
}
export default BodybuilderDatabase;