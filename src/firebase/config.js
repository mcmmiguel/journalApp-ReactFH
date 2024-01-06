import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
import { getEnvironments } from "../helpers/getEnvironments";


// console.log(import.meta.env);
// const {
//     VITE_APIKEY,
//     VITE_AUTHDOMAIN,
//     VITE_PROJECTID,
//     VITE_STORAGEBUCKET,
//     VITE_MESSAGINGSENDERID,
//     VITE_APPID,
// } = getEnvironments();

// Dev / Prod
const firebaseConfig = {
    apiKey: "AIzaSyCVOxyXhn39eNzJ2Xy7hGa4WSbmcN0eDBw",
    authDomain: "journalapp-reactfh.firebaseapp.com",
    projectId: "journalapp-reactfh",
    storageBucket: "journalapp-reactfh.appspot.com",
    messagingSenderId: "1049888725386",
    appId: "1:1049888725386:web:ea72276d1b11b13ffe9073"
};


// Testing 
// const firebaseConfig = {
//     apiKey: VITE_APIKEY,
//     authDomain: VITE_AUTHDOMAIN,
//     projectId: VITE_PROJECTID,
//     storageBucket: VITE_STORAGEBUCKET,
//     messagingSenderId: VITE_MESSAGINGSENDERID,
//     appId: VITE_APPID,
// };

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);
