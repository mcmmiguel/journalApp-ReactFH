import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyCVOxyXhn39eNzJ2Xy7hGa4WSbmcN0eDBw",
    authDomain: "journalapp-reactfh.firebaseapp.com",
    projectId: "journalapp-reactfh",
    storageBucket: "journalapp-reactfh.appspot.com",
    messagingSenderId: "1049888725386",
    appId: "1:1049888725386:web:ea72276d1b11b13ffe9073"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);
