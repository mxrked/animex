/**
 *
 *  This is used to toggle the cart checkout
 *
 */

import GrabCartItems from "../../data/products/grabbers/GrabCartItems";
import DeclareStorageVariable from "../../data/storages/DeclareStorageVariable";

export default function ToggleCheckout() {
  GrabCartItems();

  DeclareStorageVariable("session", "Checkout Toggled", true);

  const CHECKOUT = document.getElementById("cartCheckout");
  const DARKEN = document.getElementById("cartCheckoutDarken");
  const MAIN = document.getElementById("cartCheckoutMain");
  const INNER = document.getElementById("cartCheckoutMainInner");

  // const CART_TOTAL = CalculateCartFinalPriceTotal();

  // console.log(CART_TOTAL);

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";
  document.getElementById("checkoutCart").style.pointerEvents = "none";
  document.getElementById("clearCart").style.pointerEvents = "none";

  CHECKOUT.style.display = "flex";

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    MAIN.style.transform = "translateX(0)";
  }, 1000);

  setTimeout(() => {
    INNER.style.opacity = 1;
    INNER.style.visibility = "visible";
  }, 1750);

  setTimeout(() => {
    CHECKOUT.style.pointerEvents = "auto";
    MAIN.style.overflowY = "auto";
  }, 2300);
}
