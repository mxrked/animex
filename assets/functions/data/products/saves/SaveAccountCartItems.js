/**
 *
 *  This is used to save an accounts cart items
 *
 */

import DeclareStorageVariable from "../../storages/DeclareStorageVariable";
import RemoveStorageVariable from "../../storages/RemoveStorageVariable";
import { CART_ITEMS } from "../../../../data/variables/ARRAYS";

export default function SaveAccountCartItems(guest) {
  if (!guest) {
    // Saving accounts cart
    for (let i = 0; i < CART_ITEMS.length; i++) {
      RemoveStorageVariable("local", CART_ITEMS[i].productName);
      RemoveStorageVariable("local", CART_ITEMS[i].productName + " quantity");
    }

    if (CART_ITEMS.length > 0) {
      const JSON_ACCOUNT_CART_ITEMS = JSON.stringify(CART_ITEMS);
      DeclareStorageVariable(
        "local",
        `${document.querySelector(".account-username").innerHTML} Cart`,
        JSON_ACCOUNT_CART_ITEMS
      );
    }
  }

  if (guest) {
    // Saving accounts cart
    for (let i = 0; i < CART_ITEMS.length; i++) {
      RemoveStorageVariable("local", CART_ITEMS[i].productName);
      RemoveStorageVariable("local", CART_ITEMS[i].productName + " quantity");
    }

    if (CART_ITEMS.length > 0) {
      const JSON_GUEST_ACCOUNT_CART_ITEMS = JSON.stringify(CART_ITEMS);
      DeclareStorageVariable(
        "local",
        `Guest Cart`,
        JSON_GUEST_ACCOUNT_CART_ITEMS
      );
    }
  }
}
