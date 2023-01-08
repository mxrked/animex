/**
 *
 *  This is used to save an accounts favorite items
 *
 */

import DeclareStorageVariable from "../../storages/DeclareStorageVariable";
import RemoveStorageVariable from "../../storages/RemoveStorageVariable";
import { FAVORITE_ITEMS } from "../../../../data/variables/ARRAYS";

export default function SaveAccountFavoriteItems(guest) {
  if (!guest) {
    if (FAVORITE_ITEMS.length > 0) {
      const JSON_FAVORITE_ITEMS = JSON.stringify(FAVORITE_ITEMS);
      DeclareStorageVariable(
        "local",
        `${document.querySelector(".account-username").innerHTML} Favorites`,
        JSON_FAVORITE_ITEMS
      );
    }

    for (let i = 0; i < FAVORITE_ITEMS.length; i++) {
      RemoveStorageVariable(
        "local",
        "Favorited: " + FAVORITE_ITEMS[i].productName
      );
    }
  }

  if (guest) {
    if (FAVORITE_ITEMS.length > 0) {
      const JSON_GUEST_FAVORITE_ITEMS = JSON.stringify(FAVORITE_ITEMS);
      DeclareStorageVariable(
        "local",
        `Guest Favorites`,
        JSON_GUEST_FAVORITE_ITEMS
      );
    }

    for (let i = 0; i < FAVORITE_ITEMS.length; i++) {
      RemoveStorageVariable(
        "local",
        "Favorited: " + FAVORITE_ITEMS[i].productName
      );
    }
  }
}
