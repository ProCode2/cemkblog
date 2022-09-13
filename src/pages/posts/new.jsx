import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import NewPost from "../../components/NewPost";

const NewPostPage = () => {
  const { user } = useAuth();
  if (!user) {
    toast("Login to continue creating a post.");
    if (window) window.location.href = "/";
  }
  return <NewPost />;
};

export default NewPostPage;
