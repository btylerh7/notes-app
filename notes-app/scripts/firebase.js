// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import svelte from 'svelte'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD80QzkFZec5R05eXzOPnViDVTc0Mazcwk",
  authDomain: "notes-app-eacae.firebaseapp.com",
  projectId: "notes-app-eacae",
  storageBucket: "notes-app-eacae.appspot.com",
  messagingSenderId: "590624021476",
  appId: "1:590624021476:web:b7bc8b881884962e43c5f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
