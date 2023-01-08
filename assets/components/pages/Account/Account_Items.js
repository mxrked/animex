/**
 *
 *  This is the account cart
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FaTrash } from "react-icons/fa";

import { FAVORITE_ITEMS, CART_ITEMS } from "../../../data/variables/ARRAYS";

import ExitAndRoute from "../../../functions/routing/ExitAndRoute";
import RemoveStorageVariable from "../../../functions/data/storages/RemoveStorageVariable";

import styles from "../../../styles/modules/Account/Account.module.css";

export const Account_Items = () => {
  const router = useRouter();

  let productsRouted = false;

  const [showAccountItems, setShowAccountItems] = useState(false);

  // Displaying Items
  useEffect(() => {
    setTimeout(() => {
      setShowAccountItems(true);
    }, 5000);

    // Displays the items if the user is no on the tab
    window.addEventListener("focus", () => {
      setTimeout(() => {
        setShowAccountItems(true);
      }, 5000);
    });
  }, []);

  // Displaying/Hiding loading/empty text
  useEffect(() => {
    setTimeout(() => {
      // Hide the loading text after the items load
      document.querySelectorAll(".loading-text").forEach((text) => {
        text.style.display = "none";
      });

      if (CART_ITEMS.length <= 0) {
        document.querySelectorAll(".empty-text")[0].style.display = "flex";
      } else {
        document.querySelectorAll(".empty-text")[0].style.display = "none";
      }

      if (FAVORITE_ITEMS.length <= 0) {
        document.querySelectorAll(".empty-text")[1].style.display = "flex";
      } else {
        document.querySelectorAll(".empty-text")[1].style.display = "none";
      }
    }, 5000);
  }, []);

  return (
    <section id="accountItems" className={`${styles.account_items}`}>
      <div
        className={`${styles.account_items_cart} ${styles.account_items_section}`}
      >
        <span className={`${styles.account_items_heading} half-second`}>
          My Cart Items
        </span>

        <div className={`${styles.account_items_holder}`}>
          <span className={`${styles.loading_text} loading-text`}>
            Loading Items...
          </span>

          <span className={`${styles.empty_text} empty-text`}>- Empty -</span>

          {showAccountItems &&
            CART_ITEMS.map((item) => (
              <div
                className={`${styles.cart_item} cart-item`}
                key={item.productId}
              >
                <div className={`${styles.cart_item_inner} half-second`}>
                  <button
                    className={`${styles.cart_item_remover} half-second`}
                    onClick={(e) => {
                      const PRODUCT_NAME = e.currentTarget
                        .closest(".cart-item")
                        .querySelector(".cart-item-name");

                      if (localStorage.getItem(PRODUCT_NAME.innerHTML)) {
                        RemoveStorageVariable("local", PRODUCT_NAME.innerHTML);
                      }

                      if (
                        localStorage.getItem(
                          PRODUCT_NAME.innerHTML + " quantity"
                        )
                      ) {
                        RemoveStorageVariable(
                          "local",
                          PRODUCT_NAME.innerHTML + " quantity"
                        );
                      }

                      e.currentTarget.closest(".cart-item").remove();

                      CART_ITEMS.forEach((obj) => {
                        if (obj.productName == PRODUCT_NAME.innerHTML) {
                          const ITEM_INDEX = CART_ITEMS.indexOf(obj);
                          CART_ITEMS.splice(ITEM_INDEX, 1);
                        }
                      });

                      router.reload();
                    }}
                  >
                    <FaTrash className={`${styles.icon} half-second`} />
                  </button>

                  <div className={`${styles.cart_item_img_holder}`}>
                    <img
                      data-src={item.productImg}
                      className={`lazyload half-second`}
                      alt={`${item.productName} image`}
                    />
                  </div>

                  <div className={`${styles.cart_item_details}`}>
                    <div className={`${styles.cart_item_details_inner}`}>
                      <span
                        className={`${styles.cart_item_series} half-second`}
                        onClick={() => {
                          if (item.getProductSeries === "Demon Slayer") {
                            ExitAndRoute(
                              router,
                              "/products#S1",
                              productsRouted
                            );
                          }
                          if (
                            item.getProductSeries === "JoJo's Bizarre Adventure"
                          ) {
                            ExitAndRoute(
                              router,
                              "/products#S2",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Mob Psycho 100") {
                            ExitAndRoute(
                              router,
                              "/products#S3",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Vinland Saga") {
                            ExitAndRoute(
                              router,
                              "/products#S4",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "My Hero Academia") {
                            ExitAndRoute(
                              router,
                              "/products#S5",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Jujutsu Kaisen") {
                            ExitAndRoute(
                              router,
                              "/products#S6",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Attack On Titan") {
                            ExitAndRoute(
                              router,
                              "/products#S7",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Chainsaw Man") {
                            ExitAndRoute(
                              router,
                              "/products#S8",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Spy X Family") {
                            ExitAndRoute(
                              router,
                              "/products#S9",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "One Punch Man") {
                            ExitAndRoute(
                              router,
                              "/products#S10",
                              productsRouted
                            );
                          }
                        }}
                      >
                        {item.productSeries}
                      </span>
                      <br />
                      <span
                        className={`${styles.cart_item_type} half-second`}
                        onClick={() => {
                          if (item.getProductType === "Figure") {
                            ExitAndRoute(
                              router,
                              "/products#FIGURES",
                              productsRouted
                            );
                          }
                          if (item.getProductType === "Manga") {
                            ExitAndRoute(
                              router,
                              "/products#MANGA",
                              productsRouted
                            );
                          }
                          if (item.getProductType === "Clothing") {
                            ExitAndRoute(
                              router,
                              "/products#CLOTHING",
                              productsRouted
                            );
                          }
                        }}
                      >
                        {item.productType}
                      </span>
                      <br />
                      <span
                        className={`${styles.cart_item_name} cart-item-name half-second`}
                      >
                        {item.productName}
                      </span>
                      <br />
                      <span className={`${styles.cart_item_price} half-second`}>
                        $ {item.productPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.account_items_favorites} ${styles.account_items_section}`}
      >
        <span className={`${styles.account_items_heading} half-second`}>
          My Favorite Items
        </span>

        <div className={`${styles.account_items_holder}`}>
          <span className={`${styles.loading_text} loading-text`}>
            Loading Items...
          </span>

          <span className={`${styles.empty_text} empty-text`}>- Empty -</span>

          {showAccountItems &&
            FAVORITE_ITEMS.map((item) => (
              <div
                className={`${styles.favorite_item} favorite-item`}
                key={item.productId}
              >
                <div className={`${styles.favorite_item_inner} half-second`}>
                  <button
                    className={`${styles.favorite_item_remover} half-second`}
                    onClick={(e) => {
                      const PRODUCT_NAME = e.currentTarget
                        .closest(".favorite-item")
                        .querySelector(".favorite-item-name");

                      if (
                        localStorage.getItem(
                          "Favorited: " + PRODUCT_NAME.innerHTML
                        )
                      ) {
                        RemoveStorageVariable(
                          "local",
                          "Favorited: " + PRODUCT_NAME.innerHTML
                        );
                      }

                      e.currentTarget.closest(".favorite-item").remove();

                      FAVORITE_ITEMS.forEach((obj) => {
                        if (obj.productName == PRODUCT_NAME.innerHTML) {
                          const ITEM_INDEX = FAVORITE_ITEMS.indexOf(obj);
                          FAVORITE_ITEMS.splice(ITEM_INDEX, 1);
                        }
                      });

                      router.reload();
                    }}
                  >
                    <FaTrash className={`${styles.icon} half-second`} />
                  </button>

                  <div className={`${styles.favorite_item_img_holder}`}>
                    <img
                      data-src={item.productImg}
                      className={`lazyload half-second`}
                      alt={`${item.productName} image`}
                    />
                  </div>

                  <div className={`${styles.favorite_item_details}`}>
                    <div className={`${styles.favorite_item_details_inner}`}>
                      <span
                        className={`${styles.favorite_item_series} half-second`}
                        onClick={() => {
                          if (item.getProductSeries === "Demon Slayer") {
                            ExitAndRoute(
                              router,
                              "/products#S1",
                              productsRouted
                            );
                          }
                          if (
                            item.getProductSeries === "JoJo's Bizarre Adventure"
                          ) {
                            ExitAndRoute(
                              router,
                              "/products#S2",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Mob Psycho 100") {
                            ExitAndRoute(
                              router,
                              "/products#S3",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Vinland Saga") {
                            ExitAndRoute(
                              router,
                              "/products#S4",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "My Hero Academia") {
                            ExitAndRoute(
                              router,
                              "/products#S5",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Jujutsu Kaisen") {
                            ExitAndRoute(
                              router,
                              "/products#S6",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Attack On Titan") {
                            ExitAndRoute(
                              router,
                              "/products#S7",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Chainsaw Man") {
                            ExitAndRoute(
                              router,
                              "/products#S8",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "Spy X Family") {
                            ExitAndRoute(
                              router,
                              "/products#S9",
                              productsRouted
                            );
                          }
                          if (item.getProductSeries === "One Punch Man") {
                            ExitAndRoute(
                              router,
                              "/products#S10",
                              productsRouted
                            );
                          }
                        }}
                      >
                        {item.productSeries}
                      </span>
                      <br />
                      <span
                        className={`${styles.favorite_item_type} half-second`}
                        onClick={() => {
                          if (item.getProductType === "Figure") {
                            ExitAndRoute(
                              router,
                              "/products#FIGURES",
                              productsRouted
                            );
                          }
                          if (item.getProductType === "Manga") {
                            ExitAndRoute(
                              router,
                              "/products#MANGA",
                              productsRouted
                            );
                          }
                          if (item.getProductType === "Clothing") {
                            ExitAndRoute(
                              router,
                              "/products#CLOTHING",
                              productsRouted
                            );
                          }
                        }}
                      >
                        {item.productType}
                      </span>
                      <br />
                      <span
                        className={`${styles.favorite_item_name} favorite-item-name half-second`}
                      >
                        {item.productName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
