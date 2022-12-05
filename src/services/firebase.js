import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAeA0T6HHrdmJCDZ3_t7GZiGOLgrSaSZhw",
    authDomain: "react-project-b9606.firebaseapp.com",
    projectId: "react-project-b9606",
    storageBucket: "react-project-b9606.appspot.com",
    messagingSenderId: "805351827929",
    appId: "1:805351827929:web:259e953f406030b414d1c8"
};

const firebaseDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();