/**
 *
 *  This is used to add a item to favorites
 *
 */

// Array imports
import { FAVORITE_ITEMS } from "../../../../data/variables/ARRAYS";

export default function AddItemToFavorites(cookie, object) {
  const ISSERVER = typeof window === "undefined"; // Prevents defined error

  if (!ISSERVER) {
    // Removing item cookie from localStorage
    if (localStorage.getItem("Favorited: " + cookie)) {
      localStorage.removeItem("Favorited: " + cookie);
    }

    // Checking localStorage for item, if not in it, adds it to FAVORITE_ITEMS
    if (
      !localStorage.getItem("Favorited: " + cookie) &&
      !FAVORITE_ITEMS.indexOf(object) > -1
    ) {
      localStorage.setItem("Favorited: " + cookie, object);
      FAVORITE_ITEMS.push(object);
      console.log(FAVORITE_ITEMS);
    }
  }
}
