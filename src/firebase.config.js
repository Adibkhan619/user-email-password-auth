// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUQbovtBg-iiCdkXZEQZd71ruZrOAsWzc",
  authDomain: "user-email-password-auth-4a441.firebaseapp.com",
  projectId: "user-email-password-auth-4a441",
  storageBucket: "user-email-password-auth-4a441.appspot.com",
  messagingSenderId: "180979879018",
  appId: "1:180979879018:web:ace6bae10badd8b2990e13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;