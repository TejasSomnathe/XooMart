import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Product from "../src/components/Product/Product.jsx";
import Stores from "../src/components/Stores/Stores.jsx";
 import Register from "../src/components/Register/Register.jsx";
import Cart from "../src/components/Cart/Cart.jsx";
import Login from "./components/Login/Login.jsx";

 import Profile from "./components/Profile/Profile.jsx";
import Addproducts from "./AddProducts/AddProducts.jsx";
import Myproduct from "./MyProduct/Myproduct.jsx";
import ImageSearch from "./components/ImageSearch/ImageSearch.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "products", element: <Product /> },
      { path: "store", element: <Stores /> },
      
      {
        path: "cart",
        element:<Cart />
      },

      {
        path: "login",
        element:<Login />
      },
      {
        path: "register", 
        element:<Register />
      },
      {
        path: "profile",
        element:<Profile />
      },
      {
        path: "addProduct",
        element:<Addproducts />
      },
      {
        path: "myProduct",
        element:<Myproduct />
      },
      {
        path:"imageSearch",
        element:<ImageSearch />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <RouterProvider router={router} />
   
  </StrictMode>
);
