/**
 *
 * ! ================== !
 * !                    !
 * !  IMPORTANT THINGS  !
 * !                    !
 * ! ================== !
 *
 *
 * 1.) I will not grant access to the db as it is hosted on a personal email, but all of this code will work as expected regarding the db.
 *     So, if you dont want to lose your account info, its best to write it down so you can come back to it later. Dont worry, I encrypt both
 *     your password and email address for your benefit. Both of which are stored in the localStorage when your are logged in.
 *
 * 2.) Mongoose will not work properly on server side as the http requests take forever, so it is best to run this project on client side
 *
 */

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "react-multi-carousel/lib/styles.css";

// Data/Functions/Images Imports
import DeclareStorageVariable from "../assets/functions/data/storages/DeclareStorageVariable";
import RemoveStorageVariable from "../assets/functions/data/storages/RemoveStorageVariable";
import ManipUserInteraction from "../assets/functions/dom/manip/ManipUserInteraction";
import CheckMobileNavMenuStatus from "../assets/functions/dom/checkers/CheckMobileNavStatus";
import CheckUserDevice from "../assets/functions/dom/checkers/CheckUserDevice";
import GrabCartItems from "../assets/functions/data/products/grabbers/GrabCartItems";
import AddCartItemQuantityTotalToCartLinks from "../assets/functions/data/products/adders/AddCartItemQuantityTotalToCartLinks";
import GrabFavoriteItems from "../assets/functions/data/products/grabbers/GrabFavoriteItems";
import AddFavoriteItemsTotalToFavoriteLinks from "../assets/functions/data/products/adders/AddFavoriteItemsTotalToFavoriteLinks";
import TriggerPageFade from "../assets/functions/dom/triggers/TriggerPageFade";
import CheckUsername from "../assets/functions/dom/checkers/account/CheckUsername";
import SaveAccountCartItems from "../assets/functions/data/products/saves/SaveAccountCartItems";
import SaveAccountFavoriteItems from "../assets/functions/data/products/saves/SaveAccountFavoriteItems";
import CheckBrowser from "../assets/functions/dom/checkers/CheckBrowser";

import {
  CART_ITEMS,
  CART_ITEM_QUANTITIES,
  FAVORITE_ITEMS,
} from "../assets/data/variables/ARRAYS";

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /**
   * ? GLOBAL
   */
  //! NProgress Init
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      NProgress.start();
    });

    window.addEventListener("load", () => {
      setTimeout(() => {
        NProgress.done();
      }, 500);
    });

    if (document.readyState === "complete") {
      NProgress.done();
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    });
  }, [router, router.events]);

  /**
   * ? DATA
   */
  //! Session/Local Storage Clearing
  useEffect(() => {
    RemoveStorageVariable("local", "ally-supports-cache");
    RemoveStorageVariable("session", "Search Opened");
    RemoveStorageVariable("session", "Mobile Nav Opened");
    RemoveStorageVariable("session", "Page Routing");

    // This is to prevent undefined usernames
    if (localStorage.getItem("Username") === "undefined") {
      RemoveStorageVariable("local", "Logged In");
      RemoveStorageVariable("local", "Username");
    }

    // Removes Login/Signup page refresh prevention on non Login/Signup pages
    if (router.pathname !== "/login_signup") {
      RemoveStorageVariable("session", "Prevent Login/Signup Refresh");
    }

    /* 
       If user is not logged in, they will be put into Guest Mode which allows
       them to make purchases but clears their products and favorites after they leave,
       so they need to make their orders on one stop
      */
    if (!localStorage.getItem("Logged In")) {
      if (!sessionStorage.getItem("GUEST MODE")) {
        setTimeout(() => {
          DeclareStorageVariable("session", "GUEST MODE", true);
        }, 500);
      }
    }

    if (localStorage.getItem("Logged In")) {
      RemoveStorageVariable("session", "Reset APIs");
    }
  }, [router]);
  useEffect(() => {
    // Logging user out after closing the session/website
    if (!sessionStorage.getItem("On Website")) {
      // localStorage.clear();
      RemoveStorageVariable("local", "Logged In");
      RemoveStorageVariable("local", "E_Email");
      RemoveStorageVariable("local", "E_Password");
      RemoveStorageVariable("local", "Username");

      // Clearing any unwanted items
      for (let i = 0; i < CART_ITEMS.length; i++) {
        RemoveStorageVariable("local", `${CART_ITEMS[i].productName}`);
        RemoveStorageVariable("local", `${CART_ITEMS[i].productName} quantity`);
      }

      for (let j = 0; j < FAVORITE_ITEMS.length; j++) {
        RemoveStorageVariable(
          "local",
          `Favorited: ${FAVORITE_ITEMS[j].productName}`
        );
      }

      // Declaring the user is on the website
      setTimeout(() => {
        DeclareStorageVariable("session", "On Website", true);
      }, 1200);
    }
  }, []);

  //! Preventing null errors by refreshing
  // This is mostly for the account, cart and favorites page
  useEffect(() => {
    setTimeout(() => {
      if (!sessionStorage.getItem("NULL Error Prevention")) {
        router.reload();
        DeclareStorageVariable("session", "NULL Error Prevention", true);
      }
    }, 500);

    // This detects if the user uses the browsers back/forward buttons
    window.addEventListener("popstate", () => {
      if (sessionStorage.getItem("NULL Error Prevention")) {
        RemoveStorageVariable("session", "NULL Error Prevention");
      }
    });
  }, [router]);

  //! Clearing GUEST Products before they enter GUEST MODE
  useEffect(() => {
    if (!sessionStorage.getItem("GUEST MODE")) {
      CART_ITEMS.length = 0;
      CART_ITEM_QUANTITIES.length = 0;
      FAVORITE_ITEMS.length = 0;

      RemoveStorageVariable("local", "Guest Cart");

      for (let i = 0; i < CART_ITEMS.length; i++) {
        RemoveStorageVariable("local", CART_ITEMS[i].productName);
        RemoveStorageVariable("local", CART_ITEMS[i].productName + " quantity");
      }

      for (let i = 0; i < FAVORITE_ITEMS.length; i++) {
        RemoveStorageVariable(
          "local",
          "Favorited: " + FAVORITE_ITEMS[i].productName
        );
      }
    }
  }, []);

  /**
   * ? CHECKERS
   */
  //! Check users browser
  useEffect(() => {
    const BROWSER = CheckBrowser();

    if (BROWSER == "Chrome") {
      console.log("User is on Google Chrome");
    }
    if (BROWSER == "Firefox") {
      console.log("User is on Firefox");
    }
    if (BROWSER == "Edge" || BROWSER === "Edg") {
      console.log("User is on Mircosoft Edge");
    }
    if (BROWSER == "MSIE 8.0") {
      console.log("...why are you still using this...");
    }
    if (BROWSER == "MSIE 9.0") {
      console.log("...why are you still using this...");
    }
  }, []);

  //! Checking for username
  useEffect(() => {
    CheckUsername(router);
  }, [router]);

  //! Checking Cart and Favorites
  useEffect(() => {
    // This will make sure either the user is in Guest Mode or logged in
    setTimeout(() => {
      GrabCartItems();
      AddCartItemQuantityTotalToCartLinks();
    }, 1000);
  }, [router]);
  useEffect(() => {
    // This will make sure either the user is in Guest Mode or logged in
    setTimeout(() => {
      GrabFavoriteItems();
      AddFavoriteItemsTotalToFavoriteLinks();
    }, 1000);
  }, [router]);

  //! Check for Host/Server
  useEffect(() => {
    DeclareStorageVariable(
      "session",
      "Enviroment:",
      document.location.hostname
    );

    if (sessionStorage.getItem("Enviroment:")) {
      if (sessionStorage.getItem("Enviroment:").indexOf("localhost") > -1) {
        console.log("User is on LOCALHOST.");
      } else {
        console.log("User is on " + document.location.hostname);
      }
    }
  }, []);

  //! Check User Device
  useEffect(() => {
    let mobile,
      desktop = false;

    // Page Load
    window.addEventListener("load", () => {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    });

    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    }

    // Resize
    window.addEventListener("resize", () => {
      CheckUserDevice(mobile, desktop);
    });
  }, []);

  //! Checking Mobile Nav Menu Status
  useEffect(() => {
    window.addEventListener("resize", () => {
      CheckMobileNavMenuStatus();
    });

    router.events.on("routeChangeComplete", () => {
      CheckMobileNavMenuStatus();
    });
  }, [router]);

  //! Check for Last Scrolled Pos and Scroll to top
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      // Get last scrolled pos
      RemoveStorageVariable("session", "Last Scroll Pos");
      DeclareStorageVariable("session", "Last Scroll Pos", window.scrollY);
      window.scrollTo(0, 0);
    });
  }, []);

  /**
   * ? DISPLAYS/HIDERS
   */
  //! Display Account Cart Items
  useEffect(() => {
    // This setTimeout is for making sure the .account-username loads before hand
    setTimeout(() => {
      if (router.pathname !== "/login_signup") {
        if (localStorage.getItem("Logged In")) {
          if (localStorage.getItem("Username")) {
            if (
              localStorage.getItem(
                `${document.querySelector(".account-username").innerHTML} Cart`
              )
            ) {
              // Reversing json cart items
              const UNSTRINGIFY_CART_ITEMS = JSON.parse(
                localStorage.getItem(
                  `${
                    document.querySelector(".account-username").innerHTML
                  } Cart`
                )
              );

              // console.log(UNSTRINGIFY_CART_ITEMS);

              UNSTRINGIFY_CART_ITEMS.forEach((item) => {
                // console.log(Number(item.productQuantity));

                // Clearing cart arrays
                CART_ITEM_QUANTITIES.length = 0;
                CART_ITEMS.length = 0;

                // Adding values to local
                DeclareStorageVariable("local", `${item.productName}`, item);
                DeclareStorageVariable(
                  "local",
                  `${item.productName} quantity`,
                  Number(item.productQuantity)
                );

                // Checking if local value is equal to the item itself
                if (localStorage.getItem(`${item.productName}`)) {
                  if (item === localStorage.getItem(`${item.productName}`)) {
                    CART_ITEMS.push(item);
                  }
                }
              });

              // console.log(CART_ITEMS);

              RemoveStorageVariable(
                "local",
                `${document.querySelector(".account-username").innerHTML} Cart`
              );

              // Grabbing/Displaying cart items
              GrabCartItems();
              AddCartItemQuantityTotalToCartLinks();
            }
          }
        }
      }
    }, 5000);
  }, [router]);
  //! Display Account Favorite Items
  useEffect(() => {
    // This setTimeout is for making sure the .account-username loads before hand
    setTimeout(() => {
      if (router.pathname !== "/login_signup") {
        if (localStorage.getItem("Logged In")) {
          if (localStorage.getItem("Username")) {
            if (
              localStorage.getItem(
                `${
                  document.querySelector(".account-username").innerHTML
                } Favorites`
              )
            ) {
              // Reversing json favorite items
              const UNSTRINGIFY_FAVORITE_ITEMS = JSON.parse(
                localStorage.getItem(
                  `${
                    document.querySelector(".account-username").innerHTML
                  } Favorites`
                )
              );

              // console.log(UNSTRINGIFY_FAVORITE_ITEMS);

              UNSTRINGIFY_FAVORITE_ITEMS.forEach((item) => {
                // Clearing favorite arrays
                FAVORITE_ITEMS.length = 0;

                // Adding values to local
                DeclareStorageVariable(
                  "local",
                  `Favorited: ${item.productName}`,
                  item
                );

                // Checking if local value is equal to the item itself
                if (localStorage.getItem(`Favorited: ${item.productName}`)) {
                  if (
                    item ===
                    localStorage.getItem(`Favorited: ${item.productName}`)
                  ) {
                    FAVORITE_ITEMS.push(item);
                  }
                }
              });

              RemoveStorageVariable(
                "local",
                `${
                  document.querySelector(".account-username").innerHTML
                } Favorites`
              );

              // Grabbing/Displaying favorite items
              GrabFavoriteItems();
              AddFavoriteItemsTotalToFavoriteLinks();
            }
          }
        }
      }
    }, 5000);
  }, [router]);

  // //! Display Guest Cart Items
  useEffect(() => {
    // This setTimeout is for making sure the .account-username loads before hand
    setTimeout(() => {
      if (router.pathname !== "/login_signup") {
        if (!localStorage.getItem("Logged In")) {
          if (sessionStorage.getItem("GUEST MODE")) {
            if (localStorage.getItem(`Guest Cart`)) {
              // Reversing json cart items
              const UNSTRINGIFY_GUEST_CART_ITEMS = JSON.parse(
                localStorage.getItem(`Guest Cart`)
              );

              // console.log(UNSTRINGIFY_CART_ITEMS);

              UNSTRINGIFY_GUEST_CART_ITEMS.forEach((item) => {
                // console.log(Number(item.productQuantity));

                // Clearing cart arrays
                CART_ITEM_QUANTITIES.length = 0;
                CART_ITEMS.length = 0;

                // Adding values to local
                DeclareStorageVariable("local", `${item.productName}`, item);
                DeclareStorageVariable(
                  "local",
                  `${item.productName} quantity`,
                  Number(item.productQuantity)
                );

                // Checking if local value is equal to the item itself
                if (localStorage.getItem(`${item.productName}`)) {
                  if (item === localStorage.getItem(`${item.productName}`)) {
                    CART_ITEMS.push(item);
                  }
                }
              });

              // console.log(CART_ITEMS);

              RemoveStorageVariable("local", `Guest Cart`);

              // Grabbing/Displaying cart items
              GrabCartItems();
              AddCartItemQuantityTotalToCartLinks();
            }
          }
        }
      }
    }, 5000);
  }, [router]);
  // //! Display Guest Favorite Items
  useEffect(() => {
    // This setTimeout is for making sure the .account-username loads before hand
    setTimeout(() => {
      if (router.pathname !== "/login_signup") {
        if (!localStorage.getItem("Logged In")) {
          if (sessionStorage.getItem("GUEST MODE")) {
            if (localStorage.getItem(`Guest Favorites`)) {
              // Reversing json favorite items
              const UNSTRINGIFY_GUEST_FAVORITE_ITEMS = JSON.parse(
                localStorage.getItem(`Guest Favorites`)
              );

              // console.log(UNSTRINGIFY_FAVORITE_ITEMS);

              UNSTRINGIFY_GUEST_FAVORITE_ITEMS.forEach((item) => {
                // Clearing favorite arrays
                FAVORITE_ITEMS.length = 0;

                // Adding values to local
                DeclareStorageVariable(
                  "local",
                  `Favorited: ${item.productName}`,
                  item
                );

                // Checking if local value is equal to the item itself
                if (localStorage.getItem(`Favorited: ${item.productName}`)) {
                  if (
                    item ===
                    localStorage.getItem(`Favorited: ${item.productName}`)
                  ) {
                    FAVORITE_ITEMS.push(item);
                  }
                }
              });

              RemoveStorageVariable("local", `Guest Favorites`);

              // Grabbing/Displaying favorite items
              GrabFavoriteItems();
              AddFavoriteItemsTotalToFavoriteLinks();
            }
          }
        }
      }
    }, 5000);
  }, [router]);

  //! Show Page
  useEffect(() => {
    window.addEventListener("load", () => {
      document.getElementById("PAGE").style.opacity = 1;
      document.getElementById("PAGE").style.visibility = "visible";

      if (
        !sessionStorage.getItem("Search Opened") &&
        !sessionStorage.getItem("Mobile Nav Opened")
      ) {
        document.body.style.overflowY = "auto";
        document.body.style.pointerEvents = "auto";
      }
    });

    router.events.on("routeChangeComplete", () => {
      document.getElementById("PAGE").style.opacity = 1;
      document.getElementById("PAGE").style.visibility = "visible";

      if (
        !sessionStorage.getItem("Search Opened") &&
        !sessionStorage.getItem("Mobile Nav Opened")
      ) {
        document.body.style.overflowY = "auto";
        document.body.style.pointerEvents = "auto";
      }
    });
  }, [router, router.events]);
  useEffect(() => {
    if (document.visibilityState === "visible") {
      document.getElementById("PAGE").style.opacity = 1;
      document.getElementById("PAGE").style.visibility = "visible";
      setTimeout(() => {
        document.getElementById("PAGE").style.opacity = 1;
        document.getElementById("PAGE").style.visibility = "visible";
      }, 100);
      setTimeout(() => {
        document.getElementById("PAGE").style.opacity = 1;
        document.getElementById("PAGE").style.visibility = "visible";
      }, 1100);
      // This fixes the user interaction if the user is not viewing the page while routing
      if (
        !sessionStorage.getItem("Search Opened") &&
        !sessionStorage.getItem("Mobile Nav Opened")
      ) {
        document.body.style.overflowY = "auto";
        document.body.style.pointerEvents = "auto";
      }
    }
  }, []);

  //! Hiding the Account links based on production/development
  useEffect(() => {
    if (router.pathname !== "/login_signup" && router.pathname !== "/account") {
      if (sessionStorage.getItem("Enviroment:") !== "localhost") {
        setTimeout(() => {
          document.querySelectorAll(".account-link").forEach((link) => {
            link.style.display = "none";
          });
          document.querySelectorAll(".signout-btn").forEach((btn) => {
            btn.style.display = "none";
          });
          document.querySelectorAll(".above-nav-inner").forEach((inner) => {
            inner.style.justifyContent = "center";
          });
        }, 500);
      }

      if (sessionStorage.getItem("Enviroment:") === "localhost") {
        setTimeout(() => {
          document.querySelectorAll(".account-link").forEach((link) => {
            link.style.display = "flex";
          });

          if (localStorage.getItem("Logged In")) {
            document.querySelectorAll(".signout-btn").forEach((btn) => {
              btn.style.display = "flex";
            });
          }

          document.querySelectorAll(".above-nav-inner").forEach((inner) => {
            inner.style.justifyContent = "space-between";
          });
        }, 500);
      }
    }
  }, []);

  //! Hide/Disable Page on Refresh
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      document.body.style.pointerEvents = "hidden";
      TriggerPageFade("hide");
    });
  }, []);

  /**
   * ? ENABLE/DISABLE
   */
  //! Disable/Enable User Interaction
  useEffect(() => {
    // ManipUserInteraction(false);

    window.addEventListener("load", () => {
      setTimeout(() => {
        ManipUserInteraction(true);
      }, 800);

      setTimeout(() => {
        if (sessionStorage.getItem("Last Scroll Pos")) {
          window.scrollTo(0, sessionStorage.getItem("Last Scroll Pos"));
        }
      }, 1000);
    });
  }, []);
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        ManipUserInteraction(true);
      }, 800);
    });

    router.events.on("routeChangeComplete", () => {
      setTimeout(() => {
        ManipUserInteraction(true);
      }, 800);
    });
  }, [router, router.events]);

  /**
   * ? SAVERS
   */
  //! Saving User's Account Cart/Favorite Items before the page closes
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      if (localStorage.getItem("Logged In")) {
        if (localStorage.getItem("Username")) {
          // This is used to prevent a null error
          if (router.pathname !== "/login_signup") {
            SaveAccountCartItems(false);
            SaveAccountFavoriteItems(false);
          }
        }
      }
    });
  }, [router]);
  // //! Saving Guest Cart/Favorite Items
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      if (!localStorage.getItem("Logged In")) {
        if (sessionStorage.getItem("GUEST MODE")) {
          if (router.pathname !== "/login_signup") {
            SaveAccountCartItems(true);
            SaveAccountFavoriteItems(true);
          }
        }
      }
    });
  }, [router]);

  return (
    <AnimatePresence mode="wait" key={router.asPath}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
