// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAFGwPhBOcgIlrWBe6Lw1ugUAVm7k6uCw",
  authDomain: "netflix-gpt-675d9.firebaseapp.com",
  projectId: "netflix-gpt-675d9",
  storageBucket: "netflix-gpt-675d9.firebasestorage.app",
  messagingSenderId: "1009945684759",
  appId: "1:1009945684759:web:d054b29c387d0eda43e552",
  measurementId: "G-0C203DKJGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();