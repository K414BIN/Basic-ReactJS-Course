import {initializeApp} from "firebase/firebase-app";
import * as firebaseAuth from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCA9huhSjbAvMmly7EMrroa57ugbRXYlnM",
    authDomain: "gb-react-project-df03b.firebaseapp.com",
    projectId: "gb-react-project-df03b",
    storageBucket: "gb-react-project-df03b.appspot.com",
    messagingSenderId: "229335019086",
    appId: "1:229335019086:web:82592cbda2520d8d0c9d1f"
};

export const app = initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;
