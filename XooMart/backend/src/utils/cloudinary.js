import { v2 as cloudinary } from "cloudinary";
import { log } from "console";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secrete: process.env.CLOUDINARY_API_SECRETE,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("file upload succesfuly", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the localy save temporary file as the uploaded operation got faild
    return null;
  }
};

export { uploadOnCloudinary };
