// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC4MV-RGHu1HadEatMpBH8K_lWT3zN5rHo",
  authDomain: "tbdtesting-6ce9e.firebaseapp.com",
  databaseURL: "https://tbdtesting-6ce9e-default-rtdb.firebaseio.com",
  projectId: "tbdtesting-6ce9e",
  storageBucket: "tbdtesting-6ce9e.appspot.com",
  messagingSenderId: "388080890107",
  appId: "1:388080890107:web:b980686891572f14fb005e",
};
const app = initializeApp(firebaseConfig);
export default getFirestore();
// Create a root reference
export const storage = getStorage();
// export const storage = app.storage();
// export { storage };
// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
