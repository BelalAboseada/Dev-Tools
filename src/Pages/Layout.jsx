import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { useState } from "react";
import Content from "./Content";
import Footer from "../Components/Footer/Footer";
import { Categories } from "../assets/data/data";
import SCrollTop from "../Components/ScrollTop/SCrollTop";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="Layout">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}  />
      <Content data={Categories} />
      <SCrollTop />
      <Footer />
    </div>
  );
};

export default Layout;
