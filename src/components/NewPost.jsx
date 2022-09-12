import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { createPost } from "../../utils/posts";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const { user } = useAuth();

  const createNewPost = async (e) => {
    const post = {
      title,
      content,
      tags,
    };
    await createPost(post, user.uid);
    if (window !== undefined) {
      window.location.href = "/";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 flex flex-col justify-center items-center">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title Here"
        className="text-3xl border border-slate-500 bg-transparent py-2 px-3 rounded-md md:w-88 w-full"
      />
      <input
        value={tags.join(",")}
        onChange={(e) =>
          setTags(e.target.value.split(","))?.map((s) => s.trim())
        }
        placeholder="Comma separated tags"
        className="text-3xl border border-slate-500 bg-transparent py-2 px-3 rounded-md md:w-88 w-full mt-2"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="m-2 mt-6 bg-transparent border border-gray-500 h-96 w-full"
      ></textarea>
      <button
        onClick={createNewPost}
        className="bg-gray-800 dark:bg-gray-300 text-white dark:text-black max-w-max py-3 px-8 rounded-md mt-4"
      >
        Post
      </button>
    </div>
  );
};

export default NewPost;
