/* eslint-disable import/prefer-default-export */
import {
  updateDoc, doc,
} from "firebase/firestore";
import { db } from "../index";

const updateUserRole = async (uid, role) => {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    role,
  });
};

export { updateUserRole };
