/**
 *
 *  This is used to clear the favorites
 *
 */

import { FAVORITE_ITEMS } from "../../../../data/variables/ARRAYS";
import RemoveStorageVariable from "../../storages/RemoveStorageVariable";

export default function ClearFavorites() {
  // Removes account cart
  if (localStorage.getItem("Username")) {
    if (
      localStorage.getItem(
        `${document.querySelector(".account-username").innerHTML} Favorites`
      )
    ) {
      RemoveStorageVariable(
        "local",
        `${document.querySelector(".account-username").innerHTML} Favorites`
      );
    }
  }

  // Removes guest cart
  if (sessionStorage.getItem("GUEST MODE")) {
    if (localStorage.getItem("Guest Favorites")) {
      RemoveStorageVariable("local", `Guest Favorites`);
    }
  }

  for (let i = 0; i < FAVORITE_ITEMS.length; i++) {
    if (localStorage.getItem("Favorited: " + FAVORITE_ITEMS[i].productName)) {
      RemoveStorageVariable(
        "local",
        "Favorited: " + FAVORITE_ITEMS[i].productName
      );
    }
  }

  FAVORITE_ITEMS.length = 0;
}
