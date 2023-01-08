/**
 *
 *  This is the cart top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ClearCart from "../../../functions/data/products/clears/ClearCart";

import { FADE_IN } from "../../../animations/FM_ANIMATIONS";
import { CART_ITEMS } from "../../../data/variables/ARRAYS";

import styles from "../../../styles/modules/Cart/Cart.module.css";

export const CartTop = () => {
  const router = useRouter();

  // Scroll Fades
  const CART_TOP_CONTROLS = useAnimation();
  const [CART_TOP_REF, CART_TOP_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (CART_TOP_IN_VIEW) {
        CART_TOP_CONTROLS.start("visible");
      }
    } else {
      CART_TOP_CONTROLS.start("visible");
    }
  }, [CART_TOP_CONTROLS, CART_TOP_IN_VIEW]);

  return (
    <section id="cartTop" className={`${styles.cart_top}`}>
      <motion.div
        className={`${styles.cart_top_inner} fm-animate in-fade half-second`}
        initial="hidden"
        animate={CART_TOP_CONTROLS}
        ref={CART_TOP_REF}
        variants={FADE_IN}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className={`${styles.cart_top_inner_box} container-fluid`}>
          <div className={`${styles.cart_top_inner_row} row`}>
            <div
              className={`${styles.cart_top_inner_side} ${styles.cart_top_inner_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <h1 className="half-second">My Cart</h1>
            </div>
            <div
              className={`${styles.cart_top_inner_side} ${styles.cart_top_inner_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.cart_top_inner_side_cnt}`}>
                <div className={`${styles.cart_total_quantity}`}>
                  <span className={`${styles.cart_total_quantity_heading}`}>
                    Items in Cart:{" "}
                  </span>
                  <span className="half-second cart-counter"></span>
                </div>

                <div className={`${styles.cart_top_btns}`}>
                  <button
                    id="clearCart"
                    className={`${styles.btn} ${styles.clear_btn} half-second`}
                    onClick={() => {
                      if (CART_ITEMS.length > 0) {
                        ClearCart();
                        router.reload();
                      }
                    }}
                  >
                    <span className="half-second">Clear Cart</span>
                  </button>
                  <button
                    id="checkoutCart"
                    className={`${styles.btn} ${styles.checkout_btn} half-second`}
                  >
                    <span className="half-second">Checkout Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
