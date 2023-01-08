/**
 *
 *  This is used to route the search
 *
 */

// Array imports
import {
  INDEX_KWS,
  INFO_KWS,
  PRODUCTS_KWS,
  FIGURES_KWS,
  MANGA_KWS,
  CLOTHING_KWS,
  DEMON_SLAYER_KWS,
  JOJO_KWS,
  MOB_PSYCHO_KWS,
  VINLAND_KWS,
  MY_HERO_ACADEMIA_KWS,
  JUJUTSU_KAISEN_KWS,
  ATTACK_ON_TITAN_KWS,
  CHAINSAW_MAN_KWS,
  SPY_X_FAMILY_KWS,
  ONE_PUNCH_MAN_KWS,
  SUPPORT_KWS,
  CART_KWS,
  FAVORITE_KWS,
} from "../../data/variables/ARRAYS";

// Function imports
import CloseSearch from "../dom/closers/CloseSearch";
import ExitAndRoute from "./ExitAndRoute";

// Check KWs for route
function RouteBasedOnKWS(
  rooter,
  input,
  kws,
  linkIndex,
  route,
  checker,
  type,
  hash
) {
  const SEARCH_LINKS = document.querySelectorAll(".search-link");

  CloseSearch();

  for (let i = 0; i < kws.length; i++) {
    const UPPERCASED_LINK = kws[i].toUpperCase();
    const UPPERCASED_INPUT = input.value.toUpperCase();

    console.log(UPPERCASED_INPUT);

    setTimeout(() => {
      if (UPPERCASED_INPUT.indexOf(UPPERCASED_LINK) > -1) {
        if (SEARCH_LINKS[linkIndex].style.opacity != 0.5) {
          //! These 2 if statements are to prevent some strange cancel rendering route error
          if (type == "link") {
            ExitAndRoute(rooter, route, checker);
          }

          if (type == "hash") {
            rooter.push(route + hash);
          }
        } else {
          console.log("You are already on that page..");
        }
      }
    }, 1300);
  }
}

export default function SearchRouting(rooter) {
  // Checkers
  let indexRouted,
    productsRouted,
    infoRouted,
    supportRouted,
    cartRouted,
    favoritesRouted = false;

  document.querySelectorAll(".search-ipt").forEach((input) => {
    const INPUT = input;

    RouteBasedOnKWS(rooter, INPUT, INDEX_KWS, 0, "/", indexRouted, "link");
    RouteBasedOnKWS(
      rooter,
      INPUT,
      PRODUCTS_KWS,
      1,
      "/products/",
      productsRouted,
      "link"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      FIGURES_KWS,
      2,
      "/products/",
      productsRouted,
      "hash",
      "#FIGURES"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      MANGA_KWS,
      3,
      "/products/",
      productsRouted,
      "hash",
      "#MANGA"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      CLOTHING_KWS,
      4,
      "/products/",
      productsRouted,
      "hash",
      "#CLOTHING"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      DEMON_SLAYER_KWS,
      5,
      "/products/",
      productsRouted,
      "hash",
      "#S1"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      JOJO_KWS,
      6,
      "/products/",
      productsRouted,
      "hash",
      "#S2"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      MOB_PSYCHO_KWS,
      7,
      "/products/",
      productsRouted,
      "hash",
      "#S3"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      VINLAND_KWS,
      8,
      "/products/",
      productsRouted,
      "hash",
      "#S4"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      MY_HERO_ACADEMIA_KWS,
      9,
      "/products/",
      productsRouted,
      "hash",
      "#S5"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      JUJUTSU_KAISEN_KWS,
      10,
      "/products/",
      productsRouted,
      "hash",
      "#S6"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      ATTACK_ON_TITAN_KWS,
      11,
      "/products/",
      productsRouted,
      "hash",
      "#S7"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      CHAINSAW_MAN_KWS,
      12,
      "/products/",
      productsRouted,
      "hash",
      "#S8"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      SPY_X_FAMILY_KWS,
      13,
      "/products/",
      productsRouted,
      "hash",
      "#S9"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      ONE_PUNCH_MAN_KWS,
      14,
      "/products/",
      productsRouted,
      "hash",
      "#S10"
    );
    RouteBasedOnKWS(rooter, INPUT, INFO_KWS, 15, "/info", infoRouted, "link");
    RouteBasedOnKWS(
      rooter,
      INPUT,
      SUPPORT_KWS,
      16,
      "/support",
      supportRouted,
      "link"
    );
    RouteBasedOnKWS(rooter, INPUT, CART_KWS, 17, "/cart", cartRouted, "link");
    RouteBasedOnKWS(
      rooter,
      INPUT,
      FAVORITE_KWS,
      18,
      "/favorites",
      favoritesRouted,
      "link"
    );
  });
}
