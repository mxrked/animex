/**
 *
 *  This is used to check the login form inputs
 *
 */

export default function CheckLoginFormInputs() {
  let completedFields = false;
  let passed;
  const INPUTS = document.querySelectorAll(".login-input");

  INPUTS.forEach((input) => {
    if (input.value == null || input.value == "") {
      completedFields = false;
    }

    if (input.value !== null && input.value !== "") {
      completedFields = true;
    }
  });

  if (completedFields) {
    passed = true;
  } else {
    passed = false;
  }

  return passed;
}
