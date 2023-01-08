/**
 *
 *  This is used to check if a email is valid
 *
 */

export default function CheckValidEmail(email) {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(EMAIL_REGEX)) {
    console.log("Valid Email!");
    return true;
  } else {
    console.log("Invalid Email.");
    return false;
  }
}
