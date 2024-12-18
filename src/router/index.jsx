import { createBrowserRouter, Form } from "react-router-dom";
import {
  Home,
  Blogs,
  AddPost,
  About,
  NotFound,
  AllPosts,
  Login,
  Post,
} from "@/pages";
import EditPost from "@/pages/EditPost";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/add-post",
        element: <AddPost />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all",
        element: <AllPosts />,
      },
      {
        path: "/edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
