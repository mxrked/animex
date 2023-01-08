/**
 *
 *  This is the search
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaSearch } from "react-icons/fa";

import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";
import SearchRouting from "../../../../functions/routing/SearchRouting";
import CheckSearchInput from "../../../../functions/dom/checkers/CheckSearchInput";
import CloseSearch from "../../../../functions/dom/closers/CloseSearch";

import { SEARCH_IMG } from "../../../../cdn_returns/NON_PRODUCT_IMGS";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const Search = () => {
  const router = useRouter();

  let indexRouted,
    infoRouted,
    productsRouted,
    supportRouted,
    cartRouted,
    favoritesRouted = false;

  // Tabbing through each link
  // useEffect(() => {
  //   const SEARCH_LINKS_LI = document.querySelectorAll("#searchLinks li");
  //   let currentLink = 0;

  //   document.addEventListener("keydown", (e) => {
  //     if (sessionStorage.getItem("Desktop Device")) {
  //       if (document.getElementById("search").style.opacity == 1) {
  //         switch (e.keyCode) {
  //           case 38:
  //             SEARCH_LINKS_LI[currentLink].style.border = "none";
  //             currentLink = currentLink > 0 ? --currentLink : 0; // Decreasing counter
  //             SEARCH_LINKS_LI[currentLink].style.border = "1px solid lightgrey";

  //             document.getElementById("searchIpt").value =
  //               SEARCH_LINKS_LI[currentLink].innerText;

  //             break;
  //           case 40:
  //             SEARCH_LINKS_LI[currentLink].style.border = "none";
  //             currentLink =
  //               currentLink < SEARCH_LINKS_LI.length - 1
  //                 ? ++currentLink
  //                 : SEARCH_LINKS_LI.length - 1; // Increasing counter
  //             SEARCH_LINKS_LI[currentLink].style.border = "1px solid lightgrey";

  //             document.getElementById("searchIpt").value =
  //               SEARCH_LINKS_LI[currentLink].innerText;
  //             break;
  //         }
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div id="search" className={`${styles.search} full-second`}>
      <div className={`${styles.search_cnt}`}>
        <div className={`${styles.search_cnt_top}`}>
          <button
            id="searchCloser"
            className="half-second"
            onClick={() => {
              CloseSearch();
            }}
          >
            Close
          </button>

          <h1>Search</h1>
        </div>

        <div className={`${styles.search_cnt_input_holder}`}>
          <input
            type="text"
            id="searchIpt"
            className="half-second search-ipt"
            placeholder="Ex: all products"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                SearchRouting(router);
              }
            }}
            onKeyUp={() => {
              CheckSearchInput();
            }}
          />

          <button
            id="searchGo"
            onClick={() => {
              SearchRouting(router);
            }}
          >
            <FaSearch className={`${styles.icon} half-second`} />
          </button>
        </div>

        <ul id="searchLinks">
          <li
            className="index-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/", indexRouted);
              }, 1300);
            }}
          >
            <span>Home</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products", productsRouted);
              }, 1300);
            }}
          >
            <span>All Products</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#FIGURES", productsRouted);
              }, 1300);
            }}
          >
            <span>View Figures</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#MANGA", productsRouted);
              }, 1300);
            }}
          >
            <span>View Manga</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#CLOTHING", productsRouted);
              }, 1300);
            }}
          >
            <span>View Clothing</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S1", productsRouted);
              }, 1300);
            }}
          >
            <span>Demon Slayer</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S2", productsRouted);
              }, 1300);
            }}
          >
            <span>JoJo's Bizarre Adventure</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S3", productsRouted);
              }, 1300);
            }}
          >
            <span>Mob Psycho 100</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S4", productsRouted);
              }, 1300);
            }}
          >
            <span>Vinland Saga</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S5", productsRouted);
              }, 1300);
            }}
          >
            <span>My Hero Academia</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S6", productsRouted);
              }, 1300);
            }}
          >
            <span>Jujutsu Kaisen</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S7", productsRouted);
              }, 1300);
            }}
          >
            <span>Attack On Titan</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S8", productsRouted);
              }, 1300);
            }}
          >
            <span>Chainsaw Man</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S9", productsRouted);
              }, 1300);
            }}
          >
            <span>Spy X Family</span>
          </li>
          <li
            className="products-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/products#S10", productsRouted);
              }, 1300);
            }}
          >
            <span>One Punch Man</span>
          </li>
          <li
            className="info-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/info", infoRouted);
              }, 1300);
            }}
          >
            <span>Info</span>
          </li>
          <li
            className="support-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/support", supportRouted);
              }, 1300);
            }}
          >
            <span>Support</span>
          </li>
          <li
            className="cart-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/cart", cartRouted);
              }, 1300);
            }}
          >
            <span>My Cart</span>
          </li>
          <li
            className="favorites-link search-link half-second"
            onClick={() => {
              CloseSearch();

              setTimeout(() => {
                ExitAndRoute(router, "/favorites", favoritesRouted);
              }, 1300);
            }}
          >
            <span>My Favorites</span>
          </li>
        </ul>
      </div>

      <div className={`${styles.search_img_holder}`}>
        <img
          data-src={SEARCH_IMG}
          className="lazyload"
          alt="My Hero Academia - Deku and Eri | Search Image."
        />
      </div>
    </div>
  );
};
