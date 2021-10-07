import {
  collection,
  addDoc,
  setDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import db from "./Firebase/Firebaseconfig";

export const getList = async () => {
  onSnapshot(collection(db, "StudentDB"), (snapshot) => {
    snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });
};
