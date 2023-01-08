/**
 *
 *  This is the side cnt which holds the search toggler, cart link and favorites link
 *
 */

import { useRouter } from "next/router";

import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

import ToggleSearch from "../../../../functions/dom/togglers/ToggleSearch";
import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const SideCnt = () => {
  const router = useRouter();

  let cartRouted,
    favoritesRouted = false;

  return (
    <div className={`${styles.side_cnt}`}>
      <button
        id="searchToggler"
        className={styles.search_toggler}
        onClick={() => {
          ToggleSearch();
        }}
      >
        <FaSearch className={`${styles.icon} half-second`} />
      </button>

      <div
        className={`${styles.cart_link} cart-link half-second`}
        onClick={() => {
          ExitAndRoute(router, "/cart", cartRouted);
        }}
      >
        <FaShoppingCart className={`${styles.icon} half-second`} />

        <div className="half-second">
          <span className="cart-counter half-second">0</span>
        </div>
      </div>

      <div
        className={`${styles.favorites_link} favorites-link half-second`}
        onClick={() => {
          ExitAndRoute(router, "/favorites", favoritesRouted);
        }}
      >
        <FaHeart className={`${styles.icon} half-second`} />

        <div className="half-second">
          <span className="favorites-counter half-second">0</span>
        </div>
      </div>
    </div>
  );
};
