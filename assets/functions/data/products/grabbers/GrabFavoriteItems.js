/**
 *
 *  This is used to grab all the favorited items
 *
 */

// Array imports
import {
  FAVORITE_ITEMS,
  ALL_FIGURES,
  ALL_MANGA,
  ALL_CLOTHING,
} from "../../../../data/variables/ARRAYS";

// Function imports
import AddFavoriteItemsTotalToFavoriteLinks from "../adders/AddFavoriteItemsTotalToFavoriteLinks";

function GrabFavoriteItem(cookie, object) {
  if (
    localStorage.getItem("Favorited: " + cookie) &&
    !FAVORITE_ITEMS.indexOf(object) > -1
  ) {
    FAVORITE_ITEMS.push(object);
  }
}

export default function GrabFavoriteItems() {
  const ISSERVER = typeof window === "undefined"; // Prevents defined error

  if (!ISSERVER) {
    FAVORITE_ITEMS.length = 0;

    //! FIGURES
    for (let i = 0; i < ALL_FIGURES.length; i++) {
      GrabFavoriteItem(ALL_FIGURES[i].getProductName, ALL_FIGURES[i]);
    }

    //! MANGA
    for (let j = 0; j < ALL_MANGA.length; j++) {
      GrabFavoriteItem(ALL_MANGA[j].getProductName, ALL_MANGA[j]);
    }

    //! CLOTHING
    for (let k = 0; k < ALL_CLOTHING.length; k++) {
      GrabFavoriteItem(ALL_CLOTHING[k].getProductName, ALL_CLOTHING[k]);
    }

    AddFavoriteItemsTotalToFavoriteLinks();
  }
}
