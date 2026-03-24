import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PostList, { postloader } from "./components/PostList.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Creataposts from "./components/CreatePost.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList></PostList>, loader: postloader },
      { path: "/create-post", element: <Creataposts /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
