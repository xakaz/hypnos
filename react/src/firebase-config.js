import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyCLay6bVqUOju3SJCp8o8TT6RkEq27_iJY",
    authDomain: "hypnosconnect.firebaseapp.com",
    projectId: "hypnosconnect",
    storageBucket: "hypnosconnect.appspot.com",
    messagingSenderId: "524683382029",
    appId: "1:524683382029:web:f1668a1de121cf199f3444"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

