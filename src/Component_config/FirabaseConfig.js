import React, { Component } from 'react';
import App from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';



const firebaseConfig = {
    apiKey: "AIzaSyC2KiP9SLfk8FmpkxVf6cFy9BPzgCvQfcg",
    authDomain: "e-commerce-diet.firebaseapp.com",
    databaseURL: "https://e-commerce-diet.firebaseio.com",
    projectId: "e-commerce-diet",
    storageBucket: "e-commerce-diet.appspot.com",
    messagingSenderId: "173944851674",
    appId: "1:173944851674:web:0b061e992d9b5fa1fc29e3"
  };

  class Firebase {
      constructor(){
          App.initializeApp(firebaseConfig);
          this.auth=App.auth();
          this.db=App.firestore();
          this.str=App.storage();
          
      }
      Subscribe = (email,password) =>
      this.auth.createUserWithEmailAndPassword(email,password);

      Login = (email,password) =>
      this.auth.signInWithEmailAndPassword(email,password);

      Disconnect = () =>
      this.auth.signOut();

      Additem = (nom,message) =>
      this.db.collection("Message_utilisateurs").doc("t9FKF14wQsG8IJ5a6ZOj").set({
          nom : nom,
          message : message
      })
      Readitem = () =>
      this.db.collection('Message_utilisateurs').doc("t9FKF14wQsG8IJ5a6ZOj").get({
      })

      Readpriceproduit = () =>
      this.db.collection("Message_utilisateurs").doc("4NKic5yIPhcdy694QphL").get({});


      
      
      
      
  }
  export default Firebase;