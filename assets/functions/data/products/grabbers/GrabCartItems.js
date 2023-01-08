/**
 *
 *  This is used to check for the cart items
 *
 */

// Array imports
import {
  ALL_CLOTHING,
  ALL_FIGURES,
  ALL_MANGA,
  ALL_PRODUCTS,
  CART_ITEMS,
  CART_ITEM_QUANTITIES,
} from "../../../../data/variables/ARRAYS";

// Objects imports

// Function imports
import AddCartItemQuantityTotalToCartLinks from "../adders/AddCartItemQuantityTotalToCartLinks";

// Checks for single item
function GrabCartItem(cookie, object) {
  // Appending item to CART_ITEMS
  if (localStorage.getItem(cookie) && !CART_ITEMS.indexOf(object) > -1) {
    CART_ITEMS.push(object);
  }

  // Setting new quantity
  if (localStorage.getItem(cookie + " quantity")) {
    object.setProductQuantity = localStorage.getItem(cookie + " quantity");
  }

  // Appending quantity of item to CART_ITEM_QUANTITIES
  if (
    localStorage.getItem(cookie + " quantity") &&
    !CART_ITEM_QUANTITIES.indexOf(object.getProductQuantity) > -1
  ) {
    CART_ITEM_QUANTITIES.push(object.getProductQuantity);
  }
}

export default function GrabCartItems() {
  const ISSERVER = typeof window === "undefined"; // Prevents defined error

  if (!ISSERVER) {
    CART_ITEMS.length = 0;
    CART_ITEM_QUANTITIES.length = 0;

    // GrabCartItem(TEST_PRODUCT.getProductName, TEST_PRODUCT);

    //! FIGURES
    for (let i = 0; i < ALL_FIGURES.length; i++) {
      GrabCartItem(ALL_FIGURES[i].getProductName, ALL_FIGURES[i]);

      ALL_PRODUCTS.push(ALL_FIGURES[i]);
    }

    //! MANGA
    for (let j = 0; j < ALL_MANGA.length; j++) {
      GrabCartItem(ALL_MANGA[j].getProductName, ALL_MANGA[j]);

      ALL_PRODUCTS.push(ALL_MANGA[j]);
    }

    //! CLOTHING
    for (let k = 0; k < ALL_CLOTHING.length; k++) {
      GrabCartItem(ALL_CLOTHING[k].getProductName, ALL_CLOTHING[k]);

      ALL_PRODUCTS.push(ALL_CLOTHING[k]);
    }

    //! ALL
    // This will show all the current products that will be used on this site (ALOT OF STUFF WILL BE ADDED TO THE CONSOLE SO WATCH OUT!!!)
    if (
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1"
    ) {
      // console.log("Here is all the current products for this site:");
      // console.table(ALL_PRODUCTS);
    }

    AddCartItemQuantityTotalToCartLinks();
  }
}
