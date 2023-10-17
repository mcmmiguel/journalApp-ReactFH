import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

// Dev / Prod
/*const firebaseConfig = {
    apiKey: "AIzaSyCVOxyXhn39eNzJ2Xy7hGa4WSbmcN0eDBw",
    authDomain: "journalapp-reactfh.firebaseapp.com",
    projectId: "journalapp-reactfh",
    storageBucket: "journalapp-reactfh.appspot.com",
    messagingSenderId: "1049888725386",
    appId: "1:1049888725386:web:ea72276d1b11b13ffe9073"
};
*/

// Testing 
const firebaseConfig = {
    apiKey: "AIzaSyC4sDm52GPR_BAtCRvl7HmzeCD127tOdXA",
    authDomain: "testing-react-7b6f6.firebaseapp.com",
    projectId: "testing-react-7b6f6",
    storageBucket: "testing-react-7b6f6.appspot.com",
    messagingSenderId: "755402632955",
    appId: "1:755402632955:web:43601a9f1980995763ca5e"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);
