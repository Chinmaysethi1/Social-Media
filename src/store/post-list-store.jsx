import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );

    return newPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_post_list,
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postTitle}  ${reactions} ${tags}`);
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const default_post_list = [
  {
    id: "1",
    title: "Go to Bangalore",
    body: "Hi guys Im going to Bangalore in my vaccation peace out!!",
    reactions: 2,
    userId: "user-1",
    tags: ["vaccation", "Bangalore", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass Btech",
    body: " 4 saal ke baad ke masti mein bhio pass ",
    reactions: 15,
    userId: "user-23",
    tags: ["graduatinng", "unbeleivable", "Enjoying"],
  },
];
export default PostListProvider;
