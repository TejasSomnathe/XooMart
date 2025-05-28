import Header from "./components/Header.jsx";
import React from "react";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import './index.css';  


function Layout(){
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;