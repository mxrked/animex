/**
 *
 *  This is the index products
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import Slider from "react-slick";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";
import AddItemToCart from "../../../functions/data/products/adders/AddItemToCart";
import GrabCartItems from "../../../functions/data/products/grabbers/GrabCartItems";
import AddCartItemQuantityTotalToCartLinks from "../../../functions/data/products/adders/AddCartItemQuantityTotalToCartLinks";
import AddItemToFavorites from "../../../functions/data/products/adders/AddItemToFavorites";
import GrabFavoriteItems from "../../../functions/data/products/grabbers/GrabFavoriteItems";
import AddFavoriteItemsTotalToFavoriteLinks from "../../../functions/data/products/adders/AddFavoriteItemsTotalToFavoriteLinks";

import { FADE_RIGHT } from "../../../animations/FM_ANIMATIONS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexProducts = (props) => {
  const router = useRouter();

  let productsRouted = false;

  const SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2300,
    autoplaySpeed: 2300,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
    focusOnSelect: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1995,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 2100,
          autoplaySpeed: 2100,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 2100,
          autoplaySpeed: 2100,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2100,
          autoplaySpeed: 2100,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 1400,
          speed: 1400,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 1400,
          speed: 1400,
        },
      },
      {
        breakpoint: 419,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1400,
          speed: 1400,
        },
      },
    ],
  };

  // Scroll Fades
  const INDEX_PRODUCTS_CONTROLS = useAnimation();
  const [INDEX_PRODUCTS_REF, INDEX_PRODUCTS_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (INDEX_PRODUCTS_IN_VIEW) {
        INDEX_PRODUCTS_CONTROLS.start("visible");
      }
    } else {
      INDEX_PRODUCTS_CONTROLS.start("visible");
    }
  }, [INDEX_PRODUCTS_CONTROLS, INDEX_PRODUCTS_IN_VIEW]);

  return (
    <section
      id="indexProducts"
      className={`${styles.index_products} overrides_Index_Products`}
    >
      <motion.div
        className={`${styles.slider_holder} fm-animate right-fade half-second`}
        initial="hidden"
        animate={INDEX_PRODUCTS_CONTROLS}
        ref={INDEX_PRODUCTS_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={styles.slider_bg} />

        <div className={styles.faded_L} />
        <div className={styles.faded_R} />

        <h1>Popular Products.</h1>

        <div className={`${styles.top_link_holder}`}>
          <div
            className="half-second"
            onClick={() => {
              TriggerExitAnimations();

              setTimeout(() => {
                PageRouting(router, "/products", productsRouted);
              }, 1000);
            }}
          >
            <span className="half-second">View Products</span>
          </div>
        </div>

        <Slider
          {...SLIDER_SETTINGS}
          className={`${styles.index_products_slider} half-second`}
        >
          {props.products.map((product) => (
            <div
              className={`${styles.product_slide} product-slide`}
              key={product.productID}
              id={product.productID}
            >
              <div className={`${styles.product_slide_inner} half-second`}>
                <div className={`${styles.product_slide_inner_top}`}>
                  <div>
                    <span
                      className={`${styles.product_series} half-second`}
                      onClick={() => {
                        if (product.getProductSeries === "Demon Slayer") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S1", productsRouted);
                          }, 1000);
                        }
                        if (
                          product.getProductSeries ===
                          "JoJo's Bizarre Adventure"
                        ) {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S2", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "Mob Psycho 100") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S3", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "Vinland Saga") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S4", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "My Hero Academia") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S5", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "Jujutsu Kaisen") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S6", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "Attack On Titan") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S7", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "Chainsaw Man") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S8", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "Spy X Family") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(router, "/products#S9", productsRouted);
                          }, 1000);
                        }
                        if (product.getProductSeries === "One Punch Man") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(
                              router,
                              "/products#S10",
                              productsRouted
                            );
                          }, 1000);
                        }
                      }}
                    >
                      {product.productSeries}
                    </span>
                    <br />
                    <span
                      className={`${styles.product_type} half-second`}
                      onClick={() => {
                        if (product.getProductType === "Figure") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(
                              router,
                              "/products#FIGURES",
                              productsRouted
                            );
                          }, 1000);
                        }
                        if (product.getProductType === "Manga") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(
                              router,
                              "/products#MANGA",
                              productsRouted
                            );
                          }, 1000);
                        }
                        if (product.getProductType === "Clothing") {
                          TriggerExitAnimations();

                          setTimeout(() => {
                            PageRouting(
                              router,
                              "/products#CLOTHING",
                              productsRouted
                            );
                          }, 1000);
                        }
                      }}
                    >
                      {product.productType}
                    </span>
                  </div>

                  <span className={`${styles.product_id} half-second`}>
                    {product.productID}
                  </span>
                </div>

                <div className={`${styles.product_img_holder}`}>
                  <img
                    data-src={product.productImg}
                    className="lazyload half-second"
                    alt={product.productName + " image."}
                  />
                </div>

                <div className={`${styles.product_details}`}>
                  <span className={`${styles.product_name} half-second`}>
                    {product.productName}
                  </span>
                  <br />
                  <span className={`${styles.product_price} half-second`}>
                    ${product.productPrice}
                  </span>
                  <br />
                  <p className={`${styles.product_desc} half-second`}>
                    {product.productDesc}
                  </p>
                </div>

                <div className={`${styles.product_interaction} interaction`}>
                  <div>
                    <span className="half-second">Quantity</span>
                    <br />
                    <input
                      type={"number"}
                      className={"quantity-input"}
                      max={99}
                      min={0}
                      placeholder={"From 0 - 100"}
                      onScroll={(e) => {
                        e.preventDefault();
                      }}
                      onKeyDown={(e) => {
                        // Preventing decimals and addition signs
                        if (e.key === "." || e.key === "+") {
                          e.preventDefault();
                        }
                      }}
                      onBlur={(e) => {
                        // Preventing negative numbers
                        if (e.currentTarget.value < 0) {
                          e.currentTarget.value = 0;
                        }

                        // Preventing an amount greater than 99
                        if (e.currentTarget.value > 99) {
                          e.currentTarget.value = 99;
                        }
                      }}
                    />
                  </div>

                  <button
                    className="half-second"
                    onClick={(e) => {
                      const ITEM_QUANTITY_AMOUNT = e.currentTarget
                        .closest(".interaction")
                        .querySelector("input").value;

                      product.setProductQuantity = Number(ITEM_QUANTITY_AMOUNT);

                      e.currentTarget
                        .closest(".interaction")
                        .querySelector("input").value = "";

                      AddItemToCart(product.getProductName, product);
                      GrabCartItems();
                      AddCartItemQuantityTotalToCartLinks();
                    }}
                  >
                    <FaCartPlus className={`${styles.icon} half-second`} />
                  </button>
                  <button
                    className="half-second"
                    onClick={() => {
                      AddItemToFavorites(product.getProductName, product);
                      GrabFavoriteItems();
                      AddFavoriteItemsTotalToFavoriteLinks();
                    }}
                  >
                    <FaHeart className={`${styles.icon} half-second`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};
