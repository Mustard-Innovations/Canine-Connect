// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkKE6l7dhGNAZ87gTbq0urfR1UPWPnBsY",
  authDomain: "canineconnectng.firebaseapp.com",
  projectId: "canineconnectng",
  storageBucket: "canineconnectng.appspot.com",
  messagingSenderId: "343799745824",
  appId: "1:343799745824:web:00e51bfc60e0beaa9ddb45",
  measurementId: "G-4DZH6BGMT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore ()