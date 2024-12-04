import { createBrowserRouter, Form } from "react-router-dom";
import {
  Home,
  Blogs,
  AddPost,
  About,
  NotFound,
  AllPosts,
  Login,
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
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
        path: "/edit-post",
        element: <EditPost />,
      },
      {
        path: "/post/:id",
        element: <Post1 />,
      },
      {
        path: "/post/:id",
        element: <Post2 />,
      },
      {
        path: "/post/:id",
        element: <Post3 />,
      },
      {
        path: "/post/:id",
        element: <Post4 />,
      },
      {
        path: "/post/:id",
        element: <Post5 />,
      },
      {
        path: "/post/:id",
        element: <Post6 />,
      },
      {
        path: "/post/:id",
        element: <Post7 />,
      },
      {
        path: "/post/:id",
        element: <Post8 />,
      },
      {
        path: "/post/:id",
        element: <Post9 />,
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
