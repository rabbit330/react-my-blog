import { createBrowserRouter, Form } from "react-router-dom";
import { Home, Blogs, AddPost, About, NotFound } from "@/pages";
import EditPost from "@/pages/EditPost";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/Blogs",
        element: <blogs />,
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
        path: "/edit-post",
        element: <EditPost />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
