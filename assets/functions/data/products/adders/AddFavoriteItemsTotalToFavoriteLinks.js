/**
 *
 *  This is used to add a count of all the total favorited items to the favorite links
 *
 */

// Array imports
import { FAVORITE_ITEMS } from "../../../../data/variables/ARRAYS";

// Function imports

export default function AddFavoriteItemsTotalToFavoriteLinks() {
  const LINK_COUNTS = document.querySelectorAll(".favorites-counter");
  const FAVORITE_ITEMS_TOTAL = FAVORITE_ITEMS.length;

  LINK_COUNTS.forEach((counter) => {
    setTimeout(() => {
      // If there are items in favorites..
      if (FAVORITE_ITEMS.length > 0) {
        counter.innerHTML = FAVORITE_ITEMS_TOTAL;
      }

      // If there are NO items in favorites..
      if (FAVORITE_ITEMS.length <= 0) {
        counter.innerHTML = 0;
      }
    }, 100);
  });
}
