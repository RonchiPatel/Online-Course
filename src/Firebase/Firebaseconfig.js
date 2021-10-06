// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA9GY-ZvUjliIoExfblR0Suwy4W4rRVKUc",
  authDomain: "onlinecourse-1a9ab.firebaseapp.com",
  projectId: "onlinecourse-1a9ab",
  storageBucket: "onlinecourse-1a9ab.appspot.com",
  messagingSenderId: "889801978007",
  appId: "1:889801978007:web:05c8057f09e64fbc0879d2",
};
const app = initializeApp(firebaseConfig);
export default getFirestore();
// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
