/**
 *
 *  This is used to return the username if given
 *
 */

export default function ReturnUsername() {
  let finalUsername;

  // If user is logged in
  if (localStorage.getItem("Logged In")) {
    if (localStorage.getItem("Username")) {
      finalUsername = localStorage
        .getItem("Username")
        .substring(
          0,
          localStorage.getItem("Username").length -
            localStorage.getItem("Username").length +
            18
        )
        .slice(1); // Removes the hash
    }
  }

  // Adds onto finalUsername based on its length
  if (finalUsername.length > 18) {
    return finalUsername + "...";
  } else {
    return finalUsername;
  }
}
