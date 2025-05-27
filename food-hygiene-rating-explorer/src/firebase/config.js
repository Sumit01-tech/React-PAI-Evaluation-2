import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: ,
    authDomain: ,
    databaseURL: ,
    projectId: ,
    storageBucket,
    messagingSenderId: ,
    appId: 
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue, off }