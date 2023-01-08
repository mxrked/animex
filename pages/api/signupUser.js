/**
 *
 *  This is used to signup the user and store the info into the db
 *
 */

import mongoose from "mongoose";

import { connection } from "../../db/connection";

import Account from "../../db/schema";

export default async function handler(req, res) {
  connection();

  try {
    await Account.create(req.body);
    res.redirect("/login_signup");
  } catch (error) {
    res.redirect("/login_signup#SIGNUP_ERROR");
  }
}
