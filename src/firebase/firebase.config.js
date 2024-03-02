// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you ne
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0e9BPRRJwPeQUx1nTJswFxDNJmSajbVg",
  authDomain: "context-auth-e9060.firebaseapp.com",
  projectId: "context-auth-e9060",
  storageBucket: "context-auth-e9060.appspot.com",
  messagingSenderId: "860734875001",
  appId: "1:860734875001:web:8a0824ac073a5d1ad27ba8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
