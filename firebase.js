import { initializeApp } from "firebase/app";
//import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAusRzk27tMtyy3qvALkuItXvmbh7haD_A",
  authDomain: "gamechanger-pro.firebaseapp.com",
  projectId: "gamechanger-pro",
  storageBucket: "gamechanger-pro.appspot.com",
  messagingSenderId: "59686896272",
  appId: "1:59686896272:web:99893b2a770c938272ce15",
  measurementId: "G-36KG77M0E0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithEmailAndPassword, signInWithPopup, db };