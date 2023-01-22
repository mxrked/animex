/**
 *
 *  This is used to make a layout of the an account registration and login
 *
 */

import mongoose from "mongoose";

const ACCOUNT_SCHEMA = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Account || mongoose.model("Account", ACCOUNT_SCHEMA);
