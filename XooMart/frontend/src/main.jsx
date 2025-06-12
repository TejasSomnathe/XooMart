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
import { UserProvider } from "./context/UserContext.jsx";
 import Profile from "./components/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "api/v1/users/products", element: <Product /> },
      { path: "api/v1/users/store", element: <Stores /> },
      
      {
        path: "api/v1/users/cart",
        element:<Cart />
      },

      {
        path: "api/v1/users/login",
        element:<Login />
      },
      {
        path: "api/v1/users/register", 
        element:<Register />
      },
      {
        path: "api/v1/users/profile",
        element:<Profile />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
