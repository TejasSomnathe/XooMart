import { Router } from "express";
import { Login, userRegister, Logout } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

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

export { router };
