  import App, { auth } from 'firebase/app';
  import Auth from 'firebase/auth';
  import Database from 'firebase/database';
  import db from 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyDA_RqomMd5IoJXOijNl5-aE9slWbZBnS0",
    authDomain: "blog-muscle-strength.firebaseapp.com",
    databaseURL: "https://blog-muscle-strength.firebaseio.com",
    projectId: "blog-muscle-strength",
    storageBucket: "blog-muscle-strength.appspot.com",
    messagingSenderId: "983108294570",
    appId: "1:983108294570:web:6b07ae5469c66999d3bdd3"
  };
  
  class Firebase {
      constructor(){
         App.initializeApp(firebaseConfig);
         this.Auth=App.auth();
         this.Database=App.database();
         this.db=App.firestore();
      }
      Signin = (email,password) =>
      this.Auth.createUserWithEmailAndPassword(email,password);
      
      Login = (email,password) =>
      this.Auth.signInWithEmailAndPassword(email,password);

      AddData = (ID_b,nom,prenom,age) =>
      this.Database.ref('Users/'+ID_b).set({
         nom_body_builder : nom,
         prenom_body_builder : prenom,
         age_boydbuilder : age
      }) 

      Dataadd = (ID,nom,prenom,age) =>
      this.db.collection("Bodybuilder").doc("strength").set({
         ID : ID,
         nom : nom,
         prenom : prenom,
         age : age
      })

      Backup = () =>
      this.db.collection("Bodybuilder").doc("strength").get();


       

  }
 export default Firebase;