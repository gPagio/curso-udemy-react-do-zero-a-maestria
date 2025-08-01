// Recursos do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_CLOUD_FIREBASE_API_KEY,
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

// Inicia o Firebase Authentication, o sistema de autenticação do Firebase
const auth = getAuth(app);

export { db, auth };
