/**
 *
 *  This is used to check the signup form inputs
 *
 */

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function CheckSignupFormInputs() {
  let completedFields,
    samePassword,
    validEmail = false;

  let passed;
  const INPUTS = document.querySelectorAll(".register-input");

  INPUTS.forEach((input) => {
    if (input.value == null || input.value == "") {
      completedFields = false;
    }

    if (input.value !== null && input.value !== "") {
      completedFields = true;
    }
  });

  if (INPUTS[2].value === INPUTS[3].value) {
    samePassword = true;
  }
  if (INPUTS[2].value !== INPUTS[3].value) {
    samePassword = false;
  }

  // Checking Email
  if (validateEmail(INPUTS[1].value)) {
    validEmail = true;
  } else {
    validEmail = false;
  }

  if (completedFields && samePassword && validEmail) {
    passed = true;
  } else {
    passed = false;
  }

  return passed;
}
