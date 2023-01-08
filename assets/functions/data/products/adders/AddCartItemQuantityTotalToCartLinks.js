/**
 *
 *  This is used to add the quantity total to the cart
 *
 */

// Array imports
import { CART_ITEMS } from "../../../../data/variables/ARRAYS";

// Function imports
import CalculateCartItemQuantitiesTotal from "../calculates/CalculateCartItemQuantitiesTotal";

export default function AddCartItemQuantityTotalToCartLinks() {
  const LINK_COUNTS = document.querySelectorAll(".cart-counter");
  const QUANTITY_TOTAL = CalculateCartItemQuantitiesTotal();

  LINK_COUNTS.forEach((counter) => {
    setTimeout(() => {
      // If there are items in cart..
      if (CART_ITEMS.length > 0) {
        counter.innerHTML = QUANTITY_TOTAL;
      }

      // If there are NO items in cart..
      if (CART_ITEMS.length <= 0) {
        counter.innerHTML = 0;
      }
    }, 100);
  });
}
