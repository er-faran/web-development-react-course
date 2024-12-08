// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfigData = {
  apiKey: "XXX",
  authDomain: "XXX",
  projectId: "XX",
  storageBucket: "XX",
  messagingSenderId: "XX",
  appId: "XX",
  databaseURL: "XX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfigData);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { auth, database };
