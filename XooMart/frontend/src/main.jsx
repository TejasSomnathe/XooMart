import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Product from "../src/components/Product/Product.jsx";
import Stores from "../src/components/Stores/Stores.jsx";
// import Login from "../src/components/Login/Login.jsx";
import Cart from "../src/components/Cart/Cart.jsx";

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
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      {
        path: "cart",
        element:<Cart />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
