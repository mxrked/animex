/**
 *
 *  This is used to detect the username when the user is logged in
 *
 */

// Function imports
import DeclareStorageVariable from "../../../data/storages/DeclareStorageVariable";
import CleanURL from "../../../routing/CleanURL";

export default function CheckUsername(rooter) {
  const URL = window.location.hash;
  const SPLIT_URL = URL.split("/");
  let finalUsername;

  // If user is logged in
  if (localStorage.getItem("Logged In")) {
    // Declare the username by default
    if (!localStorage.getItem("Username")) {
      DeclareStorageVariable("local", "Username", SPLIT_URL[1]);
    }

    if (localStorage.getItem("Username")) {
      // Hiding Account Link
      document.querySelectorAll(".login-signup-link").forEach((link) => {
        link.style.display = "none";
      });

      // Displaying username on AboveNav
      document
        .querySelectorAll(".account-username-holder")
        .forEach((holder) => {
          holder.style.display = "flex";
          holder.style.alignItems = "center";
        });

      // Displaying Signout btns
      document.querySelectorAll(".signout-btn").forEach((btn) => {
        btn.style.display = "flex";
        btn.style.alignItems = "center";
      });

      // Setting the username to text
      document.querySelectorAll(".account-username").forEach((username) => {
        // This is to prevent a long username
        setTimeout(() => {
          if (localStorage.getItem("Username").length >= 18) {
            finalUsername = localStorage
              .getItem("Username")
              .substring(
                0,
                localStorage.getItem("Username").length -
                  localStorage.getItem("Username").length +
                  18
              )
              .slice(1); // Removes hash

            // const FINAL_SHORTENED_USERNAME = SHORTENED_USERNAME + "...";
            username.innerHTML = finalUsername + "...";
          } else {
            username.innerHTML = localStorage.getItem("Username").slice(1); // Removes hash
          }
        }, 100);
      });
    }
  }

  // Cleaning up the url a bit
  if (URL.indexOf("#succesful_login") > -1) {
    CleanURL(rooter, "Cleaning URL after login");
  }
}
