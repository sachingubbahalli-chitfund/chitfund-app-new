import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCneL3d...",   // from Firebase console
  authDomain: "chitfund-gubbahalli.firebaseapp.com",
  projectId: "chitfund-gubbahalli",
  storageBucket: "chitfund-gubbahalli.appspot.com",
  messagingSenderId: "180235096068",
  appId: "1:180235096068:web:c108cc2196f59274446409"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
