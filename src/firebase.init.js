import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDOdxtv5uehERYXR46CB6KYLA8K_3ujqrQ",
    authDomain: "immigration-visa-consultant.firebaseapp.com",
    projectId: "immigration-visa-consultant",
    storageBucket: "immigration-visa-consultant.appspot.com",
    messagingSenderId: "287373588800",
    appId: "1:287373588800:web:89552bfdbbb067825a62a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;