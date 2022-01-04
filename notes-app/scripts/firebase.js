// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import svelte from 'svelte'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhrDn1CC-g77Do1F4Wk3k27fZbRQT4e-0",
  authDomain: "notes-app-eb0d6.firebaseapp.com",
  projectId: "notes-app-eb0d6",
  storageBucket: "notes-app-eb0d6.appspot.com",
  messagingSenderId: "1018974169633",
  appId: "1:1018974169633:web:dba0e9d35d8e0775c09160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const colRef = collection(db, "notes");

