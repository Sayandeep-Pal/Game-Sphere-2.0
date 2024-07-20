// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS3KBXhlrOi5FctWVgs5Z512xVBfw0YvI",
  authDomain: "gamesphere-auth.firebaseapp.com",
  projectId: "gamesphere-auth",
  storageBucket: "gamesphere-auth.appspot.com",
  messagingSenderId: "1002693662802",
  appId: "1:1002693662802:web:0b529f694bf1b2815c678b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db= getFirestore(app);
export default app;