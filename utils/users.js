import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/firebase";

export const createIfNotExits = async (user) => {
  try {
    const newUser = await getUserById(user.uid);
    console.log(newUser);
    if (!newUser) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: user.displayName,
        avatarUrl:
          user.photoUrl || "https://www.cemkfest.in/assets/images/clg_logo.png",
        email: user.email,
        banned: false,
        preferredTags: [],
        createdAt: new Date(),
      });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error.message);
  }
};

export const getUserById = async (userId) => {
  if (!userId) return;
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  return userSnap.data();
};
