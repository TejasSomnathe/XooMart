import { Router } from "express";
import { Login, userRegister, Logout } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addProduct, viewProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "shopImage",
      maxCount: 1,
    },
  ]),
  userRegister
);

router.route("/login").post(Login);

router.route("/logout").post(verifyJWT, Logout);

router.route("/profile").get(verifyJWT, (req, res) => {
  res.status(200).json({ user: req.user });
});

router.route("/addProduct").post(
  upload.fields([
    {
      name: "imageUrl",
      maxCount: 1,
    },
  ]),
  addProduct
);
router.route("/products").get(viewProducts);

export { router };
