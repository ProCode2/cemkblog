import React, { useDeferredValue, useEffect, useState } from "react";
import { getPostByUserId } from "../../utils/posts";
import ArticleList from "./ArticleList";

const Profile = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!user) return;
    getPostByUserId(user.uid).then((posts) => setPosts(posts));
  }, [user]);
  return (
    <>
      <div className="w-full h-full p-4 flex justify-start items-center mx-auto max-w-6xl">
        <div className="w-full flex justify-between items-center">
          <img
            className="w-64 h-64 shadow"
            src={user?.avatarUrl || user?.photoUrl}
            alt="User Profile"
          />
          <div className="grow ml-8">
            <h3 className="text-4xl">{user?.username}</h3>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-4 flex justify-start items-center mx-auto max-w-6xl">
        <ArticleList posts={posts} />
      </div>
    </>
  );
};

export default Profile;
