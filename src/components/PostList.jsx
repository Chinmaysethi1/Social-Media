import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./Welcomemessage";
import LoadingSpinner from "./Loadingspinner";
import { useLoaderData } from "react-router";
const PostList = () => {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postloader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
