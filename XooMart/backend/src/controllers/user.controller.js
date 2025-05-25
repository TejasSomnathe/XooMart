import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiErrors.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const userRegister = asyncHandler(async (req, res) => {
  const { username, email, fullname, shopname, password } = req.body;

  if (!username || !email || !fullname || !shopname || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const exitedUser = await User.findOne({ $or: [{ username }, { email }] });

  if (exitedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }

  let shopImageLocalPath = "";
  if (req.files && req.files.shopImage && req.files.shopImage.length > 0) {
    shopImageLocalPath = req.files.shopImage[0].path;
  } else {
    return res.status(400).json({ message: "Shop image is required" });
  }

  const cloudinaryUrl = await uploadOnCloudinary(shopImageLocalPath);

  if (!cloudinaryUrl) {
    throw new ApiError(500, "Failed to upload shop image");
  }

  const user = await User.create({
    username,
    email,
    fullname,
    shopname,
    password,
    shopImage: cloudinaryUrl?.url || "",
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshTocken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User register succesfully"));
});

export { userRegister };
