import { createBrowserRouter, Form } from "react-router-dom";
import {
  Home,
  Blogs,
  AddPost,
  About,
  NotFound,
  AllPosts,
  Login,
  FranceTravel,
  TurkyTravel,
  SunTarotcard,
  PickACard,
  MyThought,
  TakeTheRisk,
  Chart,
  ReleaseStress,
  KyotoTravel,
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
        path: "/francetravel",
        element: <FranceTravel />,
      },
      {
        path: "/turkytravel",
        element: <TurkyTravel />,
      },
      {
        path: "/suntarotcard",
        element: <SunTarotcard />,
      },
      {
        path: "/pickacard",
        element: <PickACard />,
      },
      {
        path: "/mythought",
        element: <MyThought />,
      },
      {
        path: "/taketherisk",
        element: <TakeTheRisk />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
      {
        path: "/releasestress",
        element: <ReleaseStress />,
      },
      {
        path: "/kyototravel",
        element: <KyotoTravel />,
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
