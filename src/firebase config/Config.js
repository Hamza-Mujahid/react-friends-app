import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAyB7oE6M5xyCiX6GMW1QgkQS7uHn279nI",
    authDomain: "react-friends-app.firebaseapp.com",
    projectId: "react-friends-app",
    storageBucket: "react-friends-app.appspot.com",
    messagingSenderId: "761817734188",
    appId: "1:761817734188:web:8982582885038573f70589"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
