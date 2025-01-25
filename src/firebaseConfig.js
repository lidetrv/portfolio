// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Nk5kcznxOfj8iUi_vkBEjX_o5lgjV3o",
  authDomain: "myportfolio-cc5ca.firebaseapp.com",
  projectId: "myportfolio-cc5ca",
  storageBucket: "myportfolio-cc5ca.firebasestorage.app",
  messagingSenderId: "451500569183",
  appId: "1:451500569183:web:b24a810cb4d71d07b9e1ea",
  measurementId: "G-9P4C8RFX0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export db to use it in other parts of the app
