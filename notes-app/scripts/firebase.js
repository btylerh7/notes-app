// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, query, where, onSnapshot } from "firebase/firestore";
import {writable} from 'svelte/store';
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
const userQuery = query(colRef, where('username', '==', 'btylerh7'))
// Create store of user's notes
// export const userNotes = writable({
//   notes: 
// })
export const userNotes = writable([])

let allnotes = onSnapshot(userQuery, (snapshot) => {
  snapshot.docs.forEach(doc => {
    let currentDoc = {...doc.data(), id: doc.id}
    userNotes.update(currentList => {

      currentList = [...currentList, currentDoc]
      
      return currentList
      
      })
      
  })
})


