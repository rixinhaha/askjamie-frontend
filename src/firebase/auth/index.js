/* eslint-disable import/prefer-default-export */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  updateDoc, doc, getDoc, setDoc,
} from "firebase/firestore";
import app, { db } from "../index";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    const {
      uid, displayName, photoURL, email,
    } = user;
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.log("here");
      // Create new user if user does not exist
      await setDoc(doc(db, "users", uid), {
        uid,
        role: "member",
        name: displayName,
        avatar: photoURL,
        email,

      });
      const newUserRef = doc(db, "users", user.uid);
      const newUserSnap = await getDoc(newUserRef);
      return newUserSnap.data();
    }
    console.log("there");
    return userSnap.data();
  } catch (error) {
    return undefined;
  }
};

const signOut = async () => {
  await auth.signOut();
};

export { signInWithGoogle, auth, signOut };
