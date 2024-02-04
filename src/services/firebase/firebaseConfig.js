import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVqNWsbqwjnigygbmJKEkorzu_z4ItoBg",
  authDomain: "planta-aab63.firebaseapp.com",
  projectId: "planta-aab63",
  storageBucket: "planta-aab63.appspot.com",
  messagingSenderId: "24198091411",
  appId: "1:24198091411:web:ae5e5aef79a2f271afb366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);