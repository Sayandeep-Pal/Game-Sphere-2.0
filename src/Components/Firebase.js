// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "gamesphere-auth.firebaseapp.com",
  projectId: "gamesphere-auth",
  storageBucket: "gamesphere-auth.appspot.com",
  messagingSenderId: "MSG_SENDER_ID",
  appId: "APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db= getFirestore(app);
export default app;
