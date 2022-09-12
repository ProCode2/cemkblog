import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/firebase";

export const getPostById = async (postId) => {
  const postRef = doc(db, "posts", postId);
  const postSnap = await getDoc(postRef);

  return { ...postSnap.data(), id: postSnap.id };
};

export const createPost = async (post, userId) => {
  try {
    await addDoc(collection(db, "posts"), {
      createdBy: userId,
      title: post.title,
      content: post.content,
      tags: post.tags,
      createdAt: new Date(),
    });
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getPosts = async () => {
  try {
    const postsRef = collection(db, "posts");
    const postsSnap = await getDocs(postsRef);
    let posts = [];
    postsSnap.forEach((pSnap) => posts.push({ ...pSnap.data(), id: pSnap.id }));
    return posts;
  } catch (error) {
    toast("Something went wrong");
  }
};

export const getPostByUserId = async (userId) => {
  try {
    const postsRef = query(
      collection(db, "posts"),
      where("createdBy", "==", userId)
    );
    const postsSnap = await getDocs(postsRef);
    let posts = [];
    postsSnap.forEach((pSnap) => posts.push({ ...pSnap.data(), id: pSnap.id }));
    return posts;
  } catch (error) {
    // toast("Something went wrong");
  }
};
