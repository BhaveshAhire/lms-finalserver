import mongoose from "mongoose";
require("dotenv").config();

const dbUrl = process.env.DB_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl).then((data: any) => {
      console.log(`database connected with ${data.connection.host}`);
    });
  } catch (error) {
    console.log(error);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
