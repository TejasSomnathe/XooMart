import Header from "./components/Header.jsx";
import React from "react";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import './index.css';  
import UserContextProvider from "./context/UserContextProvider.jsx";


function Layout(){
  return (
    <>
    <UserContextProvider>
      <Header />
      <Outlet />
      <Footer />
      </UserContextProvider>
    </>
  );
}
export default Layout;