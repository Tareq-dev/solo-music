// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxaVpO4f-5bLRVExI-f8r4BJvZUuRF-JQ",
  authDomain: "music-app-d5d2a.firebaseapp.com",
  projectId: "music-app-d5d2a",
  storageBucket: "music-app-d5d2a.appspot.com",
  messagingSenderId: "914940051576",
  appId: "1:914940051576:web:21b57dc2f9e456e6976d8d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
