import dotenv from "dotenv";
import app from "./app.js";

import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

/*
import express from 'express';
const app = express();
;(async() =>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_TEJAS}`)
        app.on("error", (error) => {

            console.log("Error",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.log("Error",error)
        
    }
})()

*/
