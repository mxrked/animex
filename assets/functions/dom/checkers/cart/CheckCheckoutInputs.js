/**
 *
 *  This is used to check what inputs the user gives to the cart checkout
 *
 */

import ClearCart from "../../../data/products/clears/ClearCart";
import CloseCheckout from "../../closers/CloseCheckout";

function CheckInput(input) {
  let inputStatus;

  if (input.value !== null && input.value !== "") {
    inputStatus = true;
  }

  if (input.value == null || input.value == "") {
    inputStatus = false;
  }

  return inputStatus;
}

export default function CheckCheckoutInputs() {
  const NAME_ON_CARD = document.getElementById("cartNameOnCard");
  const CART_EMAIL = document.getElementById("cartEmail");
  const CART_ADDRESS = document.getElementById("cartAddress");
  const CART_CITY = document.getElementById("cartCity");
  const CART_STATE = document.getElementById("cartState");
  const CART_ZIP = document.getElementById("cartZip");
  const CARD_NUM = document.getElementById("cartCardNum");
  const CARD_CVV = document.getElementById("cartCardCVV");

  const CHECKOUT_INPUTS = document.querySelectorAll(".checkout-input");

  let nameOnCardStatus,
    cartEmailStatus,
    cartAddressStatus,
    cartCityStatus,
    cartZipStatus,
    cardNumStatus,
    cardCVVStatus;
  let cartStateStatus;

  // Name on Card
  if (NAME_ON_CARD.value.indexOf(" ") > -1) {
    nameOnCardStatus = CheckInput(NAME_ON_CARD);
  }

  // Cart Email
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(CART_EMAIL.value)) {
    cartEmailStatus = true;
  }

  // Cart Address
  if (CART_ADDRESS.value.indexOf(" ") > -1) {
    cartAddressStatus = CheckInput(CART_ADDRESS);
  }

  // Cart City
  cartCityStatus = CheckInput(CART_CITY);

  // Cart State
  const STATE_ABRVS = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  for (let i = 0; i < STATE_ABRVS.length; i++) {
    if (CART_STATE.value == STATE_ABRVS[i]) {
      cartStateStatus = true;
    }
  }

  // Cart Zip
  if (CART_ZIP.value.length == 5) {
    if (!isNaN(CART_ZIP.value)) {
      cartZipStatus = CheckInput(CART_ZIP);
    }
  }

  // Card Num
  if (CARD_NUM.value.length == 16) {
    if (!isNaN(CARD_NUM.value)) {
      cardNumStatus = CheckInput(CARD_NUM);
    }
  }

  // Card CVV
  if (CARD_CVV.value.length == 3) {
    if (!isNaN(CARD_CVV.value)) {
      cardCVVStatus = CheckInput(CARD_CVV);
    }
  }

  // Checking for non valid statuses
  if (!nameOnCardStatus) {
    CHECKOUT_INPUTS[0].style.border = "1px solid #f05454";
  } else {
    CHECKOUT_INPUTS[0].style.border = "none";
  }

  if (!cartEmailStatus) {
    CHECKOUT_INPUTS[1].style.border = "1px solid #f05454";
  } else {
    CHECKOUT_INPUTS[1].style.border = "none";
  }

  if (!cartAddressStatus) {
    CHECKOUT_INPUTS[2].style.border = "1px solid #f05454";
  } else {
    CHECKOUT_INPUTS[2].style.border = "none";
  }

  if (!cartCityStatus) {
    CHECKOUT_INPUTS[3].style.border = "1px solid #f05454";
  } else {
    CHECKOUT_INPUTS[3].style.border = "none";
  }

  if (!cartStateStatus) {
    CART_STATE.style.border = "1px solid #f05454";
  } else {
    CART_STATE.style.border = "none";
  }

  if (!cartZipStatus) {
    CHECKOUT_INPUTS[4].style.border = "1px solid #f05454";
  } else {
    CHECKOUT_INPUTS[4].style.border = "none";
  }

  if (!cardNumStatus) {
    CHECKOUT_INPUTS[5].style.border = "1px solid #f05454";
  } else {
    CHECKOUT_INPUTS[5].style.border = "none";
  }

  if (!cardCVVStatus) {
    CHECKOUT_INPUTS[6].style.border = "1px solid #f05454";
  } else {
    CHECKOUT_INPUTS[6].style.border = "none";
  }

  // Checking for all valid statuses
  if (
    nameOnCardStatus &&
    cartEmailStatus &&
    cartAddressStatus &&
    cartCityStatus &&
    cartStateStatus &&
    cartZipStatus &&
    cardNumStatus &&
    cardCVVStatus
  ) {
    CloseCheckout();

    setTimeout(() => {
      ClearCart();
      window.location.href = "/#CHECKOUT_SUCCESSFUL";
    }, 2800);
  }
}
