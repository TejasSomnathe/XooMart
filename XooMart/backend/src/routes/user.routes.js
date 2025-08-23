import { Router } from "express";
import {
  Login,
  userRegister,
  Logout,
  getCurrentUser,
} from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addProduct,
  viewProducts,
  getMyProducts,
} from "../controllers/product.controller.js";
import {
  addProductToCart,
  getCart,
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../controllers/cart.controller.js";

const router = Router();

router.post(
  "/register",
  upload.fields([{ name: "shopImage", maxCount: 1 }]),
  userRegister
);
router.post("/login", Login);
router.post("/logout", verifyJWT, Logout);
router.get("/profile", verifyJWT, getCurrentUser);

router.get("/cart", verifyJWT, getCart);
router.post("/cart/add/:productId", verifyJWT, addProductToCart);
router.put("/cart/update/:productId", verifyJWT, updateQuantity);
router.delete("/cart/remove/:productId", verifyJWT, removeFromCart);
router.delete("/cart/clear", verifyJWT, clearCart);

router.post(
  "/addProduct",
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  verifyJWT,
  addProduct
);
router.get("/products", viewProducts);

router.get("/myProduct", verifyJWT, getMyProducts);

export { router };
