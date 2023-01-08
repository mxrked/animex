/**
 *
 *  This is used to add a item to the cart
 *
 */

// Array imports
import {
  CART_ITEMS,
  CART_ITEM_QUANTITIES,
} from "../../../../data/variables/ARRAYS";

export default function AddItemToCart(cookie, object) {
  const ISSERVER = typeof window === "undefined"; // Prevents defined error

  if (!ISSERVER) {
    // Removing quantity and item cookies from localStorage
    if (localStorage.getItem(cookie)) {
      localStorage.removeItem(cookie);
    }

    if (localStorage.getItem(cookie + " quantity")) {
      localStorage.removeItem(cookie + " quantity");
    }

    // Checking localStorage for item, if not in it, adds it to CART_ITEMS
    if (!localStorage.getItem(cookie) && !CART_ITEMS.indexOf(object) > -1) {
      localStorage.setItem(cookie, object);
      CART_ITEMS.push(object);
    }

    // Checking localstorage for item quantity, if not in it, adds it to cartQuantities
    if (!localStorage.getItem(cookie + " quantity")) {
      localStorage.removeItem(cookie + " quantity");
      localStorage.setItem(
        cookie + " quantity",
        Number(object.getProductQuantity)
      );
      CART_ITEM_QUANTITIES.push(Number(object.getProductQuantity));
    }

    // Removing item when the quantity of an item is 0
    if (localStorage.getItem(cookie + " quantity") == 0) {
      localStorage.removeItem(cookie + " quantity");
      localStorage.removeItem(cookie);
    }
    for (let i = 0; i < CART_ITEM_QUANTITIES.length; i++) {
      if (CART_ITEM_QUANTITIES[i].getProductQuantity == 0) {
        CART_ITEM_QUANTITIES.splice(i, 1);
      }
    }
  }

  console.log("Cart List and Cart Quantities Updated!");
  console.log("Check to see if the items were declared and catched properly");
  console.table(CART_ITEMS);
  console.table(CART_ITEM_QUANTITIES);
}
