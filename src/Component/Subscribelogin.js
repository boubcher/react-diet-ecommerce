import React, { useContext, useState } from 'react';
import FirebaseContext from '../Firebasecomponent/Context';
import mncss from './Subscribe.css';
import {FaUserCircle} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';

const  Subscribe  = (props) =>  {
    const Firebase=useContext(FirebaseContext);
    const [pseudo,setPseudo]=useState('');
    const [mail,setMail]=useState('');
    const [mdp,setMdp]=useState('');
    const [login,setLogin]=useState('');
    const [password,setPassword]=useState('');
    const [confimerpasw,setConfirmerpsw]=useState('');
    const handleChangepseudo = (event) => {
        setPseudo(event.target.value);
    }
    const handleChangemail = (event) => {
        setMail(event.target.value);
    }
    const handleChangepsw = (event) => {
        setMdp(event.target.value);
    }
    const handleChangelogin = (event) => {
        setLogin(event.target.value);
    }
    const handleChangepassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirm = (event) => {
        setConfirmerpsw(event.target.value);
    }

    const Inscrire = props => {
       Firebase.Signin(mail,mdp)
       .then(user => {
         props.history.push('/Home');
         setPseudo('');
         setMail('');
         setMdp('');
         setConfirmerpsw('');
         console.log("Inscrit");
       })
       .catch(error => {
           console.log(error);
          
       })
    }

    const Connecter = props => {
        
        Firebase.Login(login,password)
        .then(user => {
           props.history.push('/Picture');
           setLogin('');
           setPassword('');
           console.log("connecter");
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="container">
            <form onSubmit={Inscrire}>
            <h1> Sign up <FaUserFriends /></h1>
            <label> Pseudo :  </label><input type="text" placeholder="entrer un pseudo" value={pseudo} onChange={handleChangepseudo} /><br />
            <label> Email : </label><input type="email" placeholder="entrer un email" value={mail} onChange={handleChangemail} /><br />
            <label> Password : </label><input type="password" placeholder="entrer votre password" value={mdp} onChange={handleChangepsw} /><br />
            <label> confirmer votre password : </label> <input type="password" placeholder="Confirmer votre password" value={confimerpasw} onChange={handleConfirm} /><br />
            <button> Sign in </button>
            </form>
            <hr></hr>
            <form onSubmit={Connecter}>
             <h1> Log in <FaUserCircle />  </h1>
              <label> Login :  </label><input type="email" placeholder="entrer votre email" value={login} onChange={handleChangelogin} /><br />
              <label> Password : </label><input type="password" placeholder="entrer votre password" value={password} onChange={handleChangepassword} /><br />
              <button> Sign up  </button>
            </form>

        </div>
    )
}
export default Subscribe;