import { StrictMode } from "react";
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
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "product", element: <Product /> },
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
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
