import mongoose from "mongoose";
import { DB_TEJAS } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_TEJAS}`
    );
    console.log(
      `\n MongoDB connected successfully db host${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
// GFVEv9zQCbRyBODM
export default connectDB;
