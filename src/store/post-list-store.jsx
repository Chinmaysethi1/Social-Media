import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};
const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PopstListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PopstListProvider value={{ postList, addPost, deletePost }}>
      {children}
    </PopstListProvider>
  );
};
export default PopstListProvider;
