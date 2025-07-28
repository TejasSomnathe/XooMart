import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiErrors.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    console.log("Generated Access Token:", accessToken); // Debugging
    console.log("Generated Refresh Token:", refreshToken); // Debugging

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error in generateAccessAndRefreshToken:", error); // Debugging
    throw new ApiError(500, "Something went wrong while generating token");
  }
};

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
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User register succesfully"));
});

const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const userFind = await User.findOne({ email });

  if (!userFind) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordMatched = await userFind.isPasswordCorrect(password);

  if (!isPasswordMatched) {
    throw new ApiError(401, "Invalid credentials");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    userFind._id
  );

  const loggedInUser = await User.findById(userFind._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
        },
        "User login successfully"
      )
    );
});

const Logout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    $set: {
      refreshToken: undefined,
    },
  });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logout succesfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorize request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const userFind = await User.findById(decodedToken?._id);

    if (!userFind) {
      throw new ApiError(401, "invalid refresh TOKEN");
    }

    if (incomingRefreshToken !== userFind?.refreshToken) {
      throw new ApiError(401, "Refresh TOKEN is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newrefreshToken } =
      await generateAccessAndRefreshToken(userFind._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newrefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newrefreshToken },
          "access TOKEN refreshed "
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh TOKEN");
  }
});

const updatePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Please enter the coreect old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password change succesfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "user fetch succesfully"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { fullname, email } = req.body;

  if (!fullname || !email) {
    throw new ApiError(400, "Enter all credential correctly");
  }

  const user = User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullname,
        email,
      },
    },
    { new: true } //update hone ke bad wali info return hoti hai
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details update succesfully"));
});

export {
  userRegister,
  Login,
  Logout,
  refreshAccessToken,
  updatePassword,
  getCurrentUser,
  updateAccountDetails,
};
