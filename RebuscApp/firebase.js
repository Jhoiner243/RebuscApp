import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging} from "firebase/messaging"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2oe6BYmFp9_UGhVu_BNWIZzmBcywP4f8",
  authDomain: "notificaciones-camellapp.firebaseapp.com",
  projectId: "notificaciones-camellapp",
  storageBucket: "notificaciones-camellapp.appspot.com",
  messagingSenderId: "409306159180",
  appId: "1:409306159180:web:c06a6d993cfa08e5da3ce9",
  measurementId: "G-N1J9Z5FCYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

