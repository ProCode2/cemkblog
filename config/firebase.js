import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, getRedirectResult, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { createIfNotExits } from "../utils/users";

export const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // The signed-in user info.
    const user = result?.user;
    console.log(user);
    if (!user) return;

    if (!user.email.endsWith("@cemk.ac.in"))
      throw new Error("Only college email is allowed, Logging out.");

    createIfNotExits(user);
  })
  .catch((error) => {
    toast(error.message);
    signOut(auth);
  });
