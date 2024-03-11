// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// import express from "express";

// const app = express();
// const PORT = process.env.PORT;

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });

//     app.listen(PORT, () => {
//         console.log("App is listening on ", PORT);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw err;
//   }
// })();
