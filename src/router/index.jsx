import { createBrowserRouter, Form } from "react-router-dom";
import { Home, Blogs, AddPost, About, NotFound } from "@/pages";
import EditPost from "@/pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

export default router;
