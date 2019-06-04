import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: "popup"
});

const googleProvider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDgTPHR6_gQVqVMXkRK_mnd5EaKmwH1C6M",
  authDomain: "supcoin-de02b.firebaseapp.com",
  databaseURL: "https://supcoin-de02b.firebaseio.com",
  projectId: "supcoin-de02b",
  storageBucket: "supcoin-de02b.appspot.com",
  messagingSenderId: "794572198717",
  appId: "1:794572198717:web:d6b7b223ac3f1fc0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase, facebookProvider, googleProvider };
