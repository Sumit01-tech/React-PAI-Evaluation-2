import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, off } from "firebase/database";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: '',
    appId: ""
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue, off };