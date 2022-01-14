import mongoose from "mongoose";
import { MONGODB_URI } from "../config/env";

// Connect with mongodb database
const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI).then(() => {
      console.log("connected with DB");
    });
  } catch (error) {
    console.error(error);
  }
};

export default connection;
