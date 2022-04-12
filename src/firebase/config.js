// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQUUrJUa0G9J6D1PmVWfOYbmVdZegp2EM",
  authDomain: "amelie-store.firebaseapp.com",
  projectId: "amelie-store",
  storageBucket: "amelie-store.appspot.com",
  messagingSenderId: "864512587576",
  appId: "1:864512587576:web:db0e9f349aeb02215bb3cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
