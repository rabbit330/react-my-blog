import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Outlet } from "react-router-dom";
import { useUserStore } from "@/store/user";
import clsx from "clsx";
import { postApi } from "@/api/post";
import { usePostStore } from "@/store/post.js";
import { useEffect } from "react";

const Layout = () => {
  const { darkMode, setDarkMode } = useUserStore();
  const { posts, setPosts } = usePostStore();

  const getPosts = async () => {
    const { data } = await postApi.getPosts();
    setPosts(data);
  };

  useEffect(() => {
    if (!posts.length) {
      getPosts();
    }
  }, []);

  return (
    <div className={clsx("wrapper", { darkMode })}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
