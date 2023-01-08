/**
 *
 *  This is to close the cart checkout
 *
 */

import RemoveStorageVariable from "../../data/storages/RemoveStorageVariable";

export default function CloseCheckout() {
  const CHECKOUT = document.getElementById("cartCheckout");
  const DARKEN = document.getElementById("cartCheckoutDarken");
  const MAIN = document.getElementById("cartCheckoutMain");
  const INNER = document.getElementById("cartCheckoutMainInner");

  CHECKOUT.style.pointerEvents = "none";

  document.getElementById("cardInputs").style.pointerEvents = "none";
  document.getElementById("cardInputs").style.opacity = 0.5;

  document.getElementById("confirmCheckout").style.pointerEvents = "none";
  document.getElementById("confirmCheckout").style.opacity = 0.5;

  MAIN.style.overflowY = "hidden";

  INNER.style.opacity = 0;
  INNER.style.visibility = "hidden";

  setTimeout(() => {
    MAIN.style.transform = "translateX(100%)";
  }, 600);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 1500);

  setTimeout(() => {
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
    document.getElementById("checkoutCart").style.pointerEvents = "auto";
    document.getElementById("clearCart").style.pointerEvents = "auto";
    RemoveStorageVariable("session", "Checkout Toggled");
  }, 2400);
}
