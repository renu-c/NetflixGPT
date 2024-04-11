// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlVaO3n_TdXJDJgvP6TU2J6RlfTltfv8M",
  authDomain: "netflixgpt-26412.firebaseapp.com",
  projectId: "netflixgpt-26412",
  storageBucket: "netflixgpt-26412.appspot.com",
  messagingSenderId: "75379990410",
  appId: "1:75379990410:web:8f148218db84cb43fd7273",
  measurementId: "G-ZNZMS5HSPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();