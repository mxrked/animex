/**
 *
 *  This is used to clear the cart
 *
 */

import {
  CART_ITEMS,
  CART_ITEM_QUANTITIES,
} from "../../../../data/variables/ARRAYS";
import RemoveStorageVariable from "../../storages/RemoveStorageVariable";

export default function ClearCart() {
  // Removes account cart
  if (localStorage.getItem("Username")) {
    if (
      localStorage.getItem(
        `${document.querySelector(".account-username").innerHTML} Cart`
      )
    ) {
      RemoveStorageVariable(
        "local",
        `${document.querySelector(".account-username").innerHTML} Cart`
      );
    }
  }

  // Removes guest cart
  if (sessionStorage.getItem("GUEST MODE")) {
    if (localStorage.getItem("Guest Cart")) {
      RemoveStorageVariable("local", `Guest Cart`);
    }
  }

  for (let i = 0; i < CART_ITEMS.length; i++) {
    if (localStorage.getItem(CART_ITEMS[i].productName)) {
      RemoveStorageVariable("local", CART_ITEMS[i].productName);
      RemoveStorageVariable("local", CART_ITEMS[i].productName + " quantity");
    }
  }

  CART_ITEMS.length = 0;
  CART_ITEM_QUANTITIES.length = 0;
}
