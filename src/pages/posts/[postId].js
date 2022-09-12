import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPostById } from "../../../utils/posts";
import Post from "../../components/Post";

const PostPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState({});

  useEffect(() => {
    if (!postId) return;
    getPostById(postId).then((post) => setPost(post));
  }, [postId]);

  return <Post post={post} />;
};

export default PostPage;
