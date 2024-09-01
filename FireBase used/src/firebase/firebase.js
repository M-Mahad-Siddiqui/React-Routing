import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvFVIs...",
  authDomain: "first-project-athentication.firebaseapp.com",
  projectId: "first-project-athentication",
  storageBucket: "first-project-athentication.appspot.com",
  messagingSenderId: "978968068317",
  appId: "1:978968068317:web:45fe..."
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
