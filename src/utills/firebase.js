// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-vdamv9uJaQXiGqfiF-dSkFWGovVHxpw",
  authDomain: "netflixgpt-21e41.firebaseapp.com",
  projectId: "netflixgpt-21e41",
  storageBucket: "netflixgpt-21e41.appspot.com",
  messagingSenderId: "743206820241",
  appId: "1:743206820241:web:27f431d330c67e828ba230",
  measurementId: "G-BQSEPESXLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();