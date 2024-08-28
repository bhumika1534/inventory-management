// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjYbmF5pt5g_zPfvOlP9DUvM3m4fKTyjo",
  authDomain: "pantry-tracker-10e14.firebaseapp.com",
  projectId: "pantry-tracker-10e14",
  storageBucket: "pantry-tracker-10e14.appspot.com",
  messagingSenderId: "61141691589",
  appId: "1:61141691589:web:b3bc0dc20a4d85448494ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };