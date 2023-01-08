/**
 *
 *  This is the cart items
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FaMinus, FaPlus, FaTimesCircle } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "../../../animations/FM_ANIMATIONS";
import { CART_ITEMS } from "../../../data/variables/ARRAYS";

import RemoveStorageVariable from "../../../functions/data/storages/RemoveStorageVariable";
import ExitAndRoute from "../../../functions/routing/ExitAndRoute";
import GrabCartItems from "../../../functions/data/products/grabbers/GrabCartItems";
import AddCartItemQuantityTotalToCartLinks from "../../../functions/data/products/adders/AddCartItemQuantityTotalToCartLinks";
import DeclareStorageVariable from "../../../functions/data/storages/DeclareStorageVariable";
import CalculateItemTotal from "../../../functions/data/products/calculates/CalculateItemTotal";

import styles from "../../../styles/modules/Cart/Cart.module.css";

export const CartItems = () => {
  const router = useRouter();

  let productsRouted = false;

  const [showCartItems, setShowCartItems] = useState(false);

  // Displaying Items
  useEffect(() => {
    setTimeout(() => {
      setShowCartItems(true);
    }, 6000);
  }, []);

  // Displaying/Hiding loading/empty text
  useEffect(() => {
    setTimeout(() => {
      // Hide the loading text after the items load and displaying/enabling buttons
      document.querySelectorAll(".loading-text").forEach((text) => {
        text.style.display = "none";
      });

      if (CART_ITEMS.length <= 0) {
        document.querySelectorAll(".empty-text")[0].style.display = "flex";
      } else {
        document.querySelectorAll(".empty-text")[0].style.display = "none";

        // Enabling btns
        document.getElementById("checkoutCart").style.pointerEvents = "auto";
        document.getElementById("checkoutCart").style.opacity = 1;
        document.getElementById("clearCart").style.pointerEvents = "auto";
        document.getElementById("clearCart").style.opacity = 1;
      }
    }, 6000);
  }, []);

  // Scroll Fades
  const CART_ITEMS_CONTROLS = useAnimation();
  const [CART_ITEMS_REF, CART_ITEMS_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (CART_ITEMS_IN_VIEW) {
        CART_ITEMS_CONTROLS.start("visible");
      }
    } else {
      CART_ITEMS_CONTROLS.start("visible");
    }
  }, [CART_ITEMS_CONTROLS, CART_ITEMS_IN_VIEW]);

  return (
    <section id="cartItems" className={`${styles.cart_items} half-second`}>
      <motion.div
        className={`${styles.cart_items_inner} fm-animate in-fade half-seconnd`}
        initial="hidden"
        animate={CART_ITEMS_CONTROLS}
        ref={CART_ITEMS_REF}
        variants={FADE_IN}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className={`${styles.cart_items_inner_top}`}>
          <div className={`${styles.cart_items_inner_top_box} container-fluid`}>
            <div className={`${styles.cart_items_inner_top_row} row`}>
              <div
                className={`${styles.cart_items_inner_top_side} ${styles.item_side} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              >
                <span className="half-second">Item</span>
              </div>
              <div
                className={`${styles.cart_items_inner_top_side} ${styles.quantity_side} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <span className="half-second">Quantity</span>
              </div>
              <div
                className={`${styles.cart_items_inner_top_side} ${styles.total_side} col-lg-3 col-md-3 col-sm-3 col-xs-3`}
              >
                <span className="half-second">Total</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.cart_items_inner_holder}`}>
          <span className={`${styles.loading_text} loading-text`}>
            Loading Items...
          </span>

          <span className={`${styles.empty_text} empty-text`}>- Empty -</span>

          {showCartItems &&
            CART_ITEMS.map((item) => (
              <div
                key={item.productID}
                className={`${styles.cart_item_box} cart-item container-fluid`}
              >
                <div className={`${styles.cart_item_row} row`}>
                  <div
                    className={`${styles.cart_item_side} ${styles.item_side} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
                  >
                    <div className={`${styles.cart_item_img_holder}`}>
                      <img
                        data-src={item.productImg}
                        className="lazyload"
                        alt={item.productName + " image"}
                      />
                    </div>

                    <div className={`${styles.cart_item_details}`}>
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
                      <span className={`${styles.cart_item_type} half-second`}>
                        {item.productType}
                      </span>
                      <br />
                      <span className={`${styles.cart_item_name} half-second`}>
                        {item.productName}
                      </span>
                      <br />
                      <span
                        className={`${styles.cart_item_price} item-price half-second`}
                      >
                        ${item.productPrice}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${styles.cart_item_side} ${styles.quantity_side} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
                  >
                    <button
                      className={`${styles.plus} half-second`}
                      onClick={(e) => {
                        if (item.productQuantity < 99) {
                          item.setProductQuantity =
                            Number(item.productQuantity) + 1;

                          e.currentTarget
                            .closest(".cart-item")
                            .querySelector(".quantity-ipt").value =
                            item.productQuantity;

                          RemoveStorageVariable(
                            "local",
                            item.productName + " quantity"
                          );
                          DeclareStorageVariable(
                            "local",
                            item.productName + " quantity",
                            item.productQuantity
                          );
                          GrabCartItems();
                          AddCartItemQuantityTotalToCartLinks();

                          const ITEM_TOTAL = CalculateItemTotal(
                            e.currentTarget
                              .closest(".cart-item")
                              .querySelector(".quantity-ipt").value,
                            item.productPrice
                          );

                          e.currentTarget
                            .closest(".cart-item")
                            .querySelector(".item-total").innerHTML =
                            ITEM_TOTAL;
                        }
                      }}
                    >
                      <FaPlus className={`${styles.icon}`} />
                    </button>

                    <div>
                      <input
                        className="quantity-ipt"
                        type={"number"}
                        max={99}
                        min={0}
                        disabled
                        value={item.productQuantity}
                        onChange={(e) => {
                          e.currentTarget.value = item.productQuantity;
                        }}
                      />
                    </div>

                    <button
                      className={`${styles.minus} half-second`}
                      onClick={(e) => {
                        if (item.productQuantity > 0) {
                          item.setProductQuantity =
                            Number(item.productQuantity) - 1;

                          e.currentTarget
                            .closest(".cart-item")
                            .querySelector(".quantity-ipt").value =
                            item.productQuantity;

                          RemoveStorageVariable(
                            "local",
                            item.productName + " quantity"
                          );
                          DeclareStorageVariable(
                            "local",
                            item.productName + " quantity",
                            item.productQuantity
                          );
                          GrabCartItems();
                          AddCartItemQuantityTotalToCartLinks();

                          const ITEM_TOTAL = CalculateItemTotal(
                            e.currentTarget
                              .closest(".cart-item")
                              .querySelector(".quantity-ipt").value,
                            item.productPrice
                          );

                          e.currentTarget
                            .closest(".cart-item")
                            .querySelector(".item-total").innerHTML =
                            ITEM_TOTAL;
                        }

                        // This will remove the item from the cart if its quantity is <= 0
                        if (
                          e.currentTarget
                            .closest(".cart-item")
                            .querySelector(".quantity-ipt").value <= 0
                        ) {
                          e.currentTarget.closest(".cart-item").style.display =
                            "none";

                          RemoveStorageVariable("local", item.productName);
                          RemoveStorageVariable(
                            "local",
                            item.productName + " quantity"
                          );

                          GrabCartItems();
                          AddCartItemQuantityTotalToCartLinks();

                          router.reload();
                        }
                      }}
                    >
                      <FaMinus className={`${styles.icon}`} />
                    </button>
                  </div>
                  <div
                    className={`${styles.cart_item_side} ${styles.total_side} col-lg-3 col-md-3 col-sm-3 col-xs-3`}
                  >
                    <div className={`${styles.total_side_cnt}`}>
                      <div className={`${styles.total_holder}`}>
                        $
                        <span
                          className={`${styles.total_price} item-total half-second`}
                        >
                          {Math.round(
                            item.productPrice * item.productQuantity * 100
                          ) / 100}
                        </span>
                      </div>

                      <button
                        className={`${styles.cart_item_remover} half-second`}
                        onClick={() => {
                          RemoveStorageVariable("local", item.productName);
                          RemoveStorageVariable(
                            "local",
                            item.productName + " quantity"
                          );

                          GrabCartItems();
                          AddCartItemQuantityTotalToCartLinks();

                          setTimeout(() => {
                            router.reload();
                          }, 500);
                        }}
                      >
                        <FaTimesCircle className={`${styles.icon}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};
