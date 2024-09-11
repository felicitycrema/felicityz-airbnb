import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCV63PZWKQZ4gA_N43ndqiiClajIGiv4zo",
  authDomain: "airbnb-83abb.firebaseapp.com",
  projectId: "airbnb-83abb",
  storageBucket: "airbnb-83abb.appspot.com",
  messagingSenderId: "305263420586",
  appId: "1:305263420586:web:ffb04fdef3524a2ad41cd3",
  measurementId: "G-XLHF7GW6RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };