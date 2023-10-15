// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNg2DBj8fLQCAoPVYfdgMNFULwAMOorm4",
  authDomain: "imagegen-d13b6.firebaseapp.com",
  projectId: "imagegen-d13b6",
  storageBucket: "imagegen-d13b6.appspot.com",
  messagingSenderId: "907125800690",
  appId: "1:907125800690:web:46fcc288ec38e476c4da6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);


export { Auth, Provider, db, storage };