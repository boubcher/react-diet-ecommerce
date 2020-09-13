import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Heade from './Layouts/Header';
import Firebase, {FirebaseContext} from './Firebasecomponent/index';



ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
    <Heade/>
    </FirebaseContext.Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
