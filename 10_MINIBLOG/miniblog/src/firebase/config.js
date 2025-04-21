import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA84MTyj-Ygo_-pEvnCSG5EYIxR7-Gg9Z4",
  authDomain: "curso-udemy-react-miniblog.firebaseapp.com",
  projectId: "curso-udemy-react-miniblog",
  storageBucket: "curso-udemy-react-miniblog.firebasestorage.app",
  messagingSenderId: "337839233279",
  appId: "1:337839233279:web:bd76ef0e9dd3862ed8d4ca",
};

// Inicia Firebase
const app = initializeApp(firebaseConfig);

// Inicia Firestore, a base de dados do Firebase
const db = getFirestore(app);

export { db };