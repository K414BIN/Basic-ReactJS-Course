import * as firebaseAuth from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp( {
  apiKey: "AIzaSyAeI-rWuYNYAmru-Q5rDwYnqur5hptH_UE",
  authDomain: "gb-react-project-e5529.firebaseapp.com",
  databaseURL: "https://gb-react-project-e5529-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-project-e5529",
  storageBucket: "gb-react-project-e5529.appspot.com",
  messagingSenderId: "486781428280",
  appId: "1:486781428280:web:50feee19727b6844ce7ccd"
});

export const authFirebase = firebaseAuth;
