// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3rWiee9XJfVt4EvJMhN8qFHhFCHuu4jE",
  authDomain: "netflixgpt-ff32a.firebaseapp.com",
  projectId: "netflixgpt-ff32a",
  storageBucket: "netflixgpt-ff32a.appspot.com",
  messagingSenderId: "17360129974",
  appId: "1:17360129974:web:9d27e0bb49445092643b17",
  measurementId: "G-T7ZS5FP4LR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
