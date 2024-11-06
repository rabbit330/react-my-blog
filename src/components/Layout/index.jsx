import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
