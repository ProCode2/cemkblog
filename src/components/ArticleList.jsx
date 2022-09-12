import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ posts }) => {
  return (
    <div className="w-full h-full p-4 flex justify-start items-center mx-auto">
      <div className="max-w-6xl w-full">
        <div className="w-full text-left">
          <p className="font-thin text-2xl uppercase mx-auto max-w-6xl w-full">
            Explore
          </p>
          <div className="flex flex-col justify-center items-start space-y-4 mt-6">
            {posts?.map((post) => (
              <ArticleItem post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
