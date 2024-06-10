
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcBZSSCOSZk9Yv3WOGGLPG7SKabZPW3jM",
  authDomain: "dealership-55bc3.firebaseapp.com",
  projectId: "dealership-55bc3",
  storageBucket: "dealership-55bc3.appspot.com",
  messagingSenderId: "612385204537",
  appId: "1:612385204537:web:e9b40374469dc4e79560e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const carsCollection = collection(db, "cars")