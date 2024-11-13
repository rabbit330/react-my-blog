import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
