/**
 *
 *  This is used to login the user with the databases info
 *
 */

import mongoose from "mongoose";

import { connection } from "../../db/connection";

import Account from "../../db/schema";

export default async function handler(req, res) {
  connection();

  const { username, password, email } = req.body;
  const user = await Account.findOne({ username, password, email });

  if (!user) {
    res.redirect("/login_signup#LOGIN_ERROR");
    res.redirect("/login_signup");
  } else {
    res.redirect("/login_signup#succesful_login/#" + username); // Made it route back to the login page to prevent null error
  }
}
