import { useEffect, useState } from "react";
import { getPosts } from "../../utils/posts";
import ArticleList from "../components/ArticleList";
import CategoryCatalogue from "../components/CategoryCatalogue";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  return (
    <div className="">
      {/* <CategoryCatalogue /> */}
      {posts.length == 0 ? (
        <div className="bg-gray-300 font-bold flex justify-center items-center py-8 text-black w-full max-w-6xl mx-auto">
          No Posts Yet
        </div>
      ) : (
        <div className="w-full h-full p-4 flex justify-start items-center mx-auto max-w-6xl">
          <ArticleList posts={posts} />
        </div>
      )}
    </div>
  );
}
