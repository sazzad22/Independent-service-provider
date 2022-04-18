// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo1dNYpfYmobTrmxPN77O81BmvADkda-8",
  authDomain: "lens-guru.firebaseapp.com",
  projectId: "lens-guru",
  storageBucket: "lens-guru.appspot.com",
  messagingSenderId: "626310101913",
  appId: "1:626310101913:web:2a25eb39a62b7f3342f108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;