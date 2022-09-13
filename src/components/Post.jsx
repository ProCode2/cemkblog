import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getUserById } from "../../utils/users";
import CategoryCatalogue from "./CategoryCatalogue";

const Post = ({ post }) => {
  const [username, setUsername] = useState("");
  const date = new Date(post.createdAt?.seconds);

  useEffect(() => {
    if (!post) return;
    getUserById(post.createdBy).then((user) => {
      if (!user) return;
      setUsername(user.username || "");
    });
  }, [post]);
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      <h3 className="text-3xl font-bold">{post.title}</h3>
      <div className="flex justify-between items-center font-mono text-sm mt-3 text-slate-500">
        <p>@{username}</p>
        <p>
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds()}
        </p>
      </div>
      <CategoryCatalogue tags={post?.tags} />
      <div className="m-2 mt-6">
        <ReactMarkdown>{`${post.content}`}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;
