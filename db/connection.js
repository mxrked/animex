/**
 *
 *  This is used to connect to the MongoDB Database
 *
 */

import mongoose from "mongoose";

require("dotenv").config();

const URI = process.env.MONGODB_URI;

export const connection = async () => {
  mongoose.connect(URI, { useNewUrlParser: true });
};
