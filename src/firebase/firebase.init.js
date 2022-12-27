// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf5B-CW4fjndmxYWfQdDr7Op420gWg3Dw",
  authDomain: "authontaction.firebaseapp.com",
  projectId: "authontaction",
  storageBucket: "authontaction.appspot.com",
  messagingSenderId: "911598440151",
  appId: "1:911598440151:web:bbd9a5bf45bca1345dea92",
  measurementId: "G-RZ4Z0FPHQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;