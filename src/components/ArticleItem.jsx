import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getUserById } from "../../utils/users";

const ArticleItem = ({ post }) => {
  const [username, setUsername] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    getUserById(post.createdBy).then((user) => {
      setUsername(user?.username || "");
    });
  });

  return (
    <Link href={`/posts/${post.id}`}>
      <div className="border border-gray-600 dark:border-gray-100 bg-gray-50 dark:bg-slate-900 rounded-md shadow p-4 text-left w-full max-w-5xl cursor-pointer hover:shadow-lg dark:shadow-gray-400">
        <h4 className="text-xl md:text-2xl">{post.title}</h4>
        <Link href={`/profile/${post.createdBy}`}>
          <p className="font-mono text-gray-600 dark:text-gray-200 text-sm mt-2 mb-4">
            @{username}
          </p>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-3xl text-left">
          {post.content?.toString().slice(0, 30)}...
        </p>
      </div>
    </Link>
  );
};

export default ArticleItem;
