/**
 *
 *  This is used to calculate/sum all the item quantities
 *
 */

// Array imports
import { CART_ITEM_QUANTITIES } from "../../../../data/variables/ARRAYS";

export default function CalculateCartItemQuantitiesTotal() {
  var cartQuantitiesTotal;

  Number((cartQuantitiesTotal = 0)); // Prevents undefined error

  for (let i = 0; i < CART_ITEM_QUANTITIES.length; i++) {
    cartQuantitiesTotal += Number(CART_ITEM_QUANTITIES[i]);
  }

  return cartQuantitiesTotal;
}
