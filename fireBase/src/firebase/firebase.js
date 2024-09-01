  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey           : "AIzaSyCvFVIs2b5ChcAEk9g5Jz8h23QYpIPRdk0",
  authDomain       : "first-project-athentication.firebaseapp.com",
  projectId        : "first-project-athentication",
  storageBucket    : "first-project-athentication.appspot.com",
  messagingSenderId: "694589556541",
  appId            : "1:694589556541:web:5e1c584bc1e4d133e76754",
  measurementId    : "G-QKH91FQBSR"
};

  // Initialize Firebase
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, auth, db };

