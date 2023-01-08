/**
 *
 *  This is used to calculate/sum all the item totals
 *
 */

// Array imports
import { CART_ITEM_PRICES } from "../../../../data/variables/ARRAYS";

export default function CalculateCartFinalPriceTotal() {
  let cartPricesTotal = 0;

  CART_ITEM_PRICES.length = 0;

  document.querySelectorAll(".item-total").forEach((total) => {
    CART_ITEM_PRICES.push(parseFloat(total.innerHTML));
  });

  for (let i = 0; i < CART_ITEM_PRICES.length; i++) {
    cartPricesTotal += Math.round(CART_ITEM_PRICES[i] * 100) / 100;
  }

  return cartPricesTotal;
}
