import { Post } from "@/types";
import React from "react";

import cls from "./Post.module.css";

interface PostsProps {
  posts: Post[];
}

const PostPage = (props: PostsProps) => {
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className={cls.postsContainer}>
        {props.posts.map((post) => (
          <div key={post.id} className={cls.post}>
            <div className={cls.postId}>ID: {post.id}</div>
            <h3 className={cls.postTitle}>{post.title}</h3>
            <p className={cls.postBody}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
