/**
 *
 *  This is the footer
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { FADE_IN } from "../../../animations/FM_ANIMATIONS";

import ExitAndRoute from "../../../functions/routing/ExitAndRoute";
import CheckBrowser from "../../../functions/dom/checkers/CheckBrowser";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  let indexRouted,
    infoRouted,
    productsRouted,
    cartRouted,
    favoritesRouted,
    supportRouted = false;

  // Scroll Fades
  const FOOTER_CONTROLS = useAnimation();
  const [FOOTER_REF, FOOTER_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (FOOTER_IN_VIEW) {
        FOOTER_CONTROLS.start("visible");
      }
    } else {
      FOOTER_CONTROLS.start("visible");
    }
  }, [FOOTER_CONTROLS, FOOTER_IN_VIEW]);

  // Displaying current year in copyright
  useEffect(() => {
    document.querySelector("footer #currentYear").innerHTML =
      new Date().getFullYear();
  }, []);

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer_holder} fm-animate half-second`}>
        <div className={`${styles.footer_main}`}>
          <motion.div
            className={`${styles.footer_main_box} container-fluid`}
            initial="hidden"
            animate={FOOTER_CONTROLS}
            ref={FOOTER_REF}
            variants={FADE_IN}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={`${styles.footer_main_row} row`}>
              <div
                className={`${styles.footer_main_side} ${styles.footer_main_L} col-lg-3 col-md-3 col-sm-2 col-xs-3`}
              >
                <div className={`${styles.footer_links}`}>
                  <span
                    className={`${styles.footer_links_set_name} half-second`}
                  >
                    Pages
                  </span>

                  <ul>
                    <li
                      className="half-second footer-link index-link"
                      onClick={() => {
                        ExitAndRoute(router, "/", indexRouted);
                      }}
                    >
                      <span className="half-second">Home</span>
                    </li>
                    <br />
                    <li
                      className="half-second footer-link info-link"
                      onClick={() => {
                        ExitAndRoute(router, "/info", infoRouted);
                      }}
                    >
                      <span className="half-second">Info</span>
                    </li>
                    <br />
                    <li
                      className="half-second footer-link support-link"
                      onClick={() => {
                        ExitAndRoute(router, "/support", supportRouted);
                      }}
                    >
                      <span className="half-second">Support</span>
                    </li>
                    <br />
                    <li
                      className="half-second footer-link cart-link"
                      onClick={() => {
                        ExitAndRoute(router, "/cart", cartRouted);
                      }}
                    >
                      <span className="half-second">Cart</span>
                    </li>
                    <br />
                    <li
                      className="half-second footer-link favorites-link"
                      onClick={() => {
                        ExitAndRoute(router, "/favorites", favoritesRouted);
                      }}
                    >
                      <span className="half-second">Favorites</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`${styles.footer_main_side} ${styles.footer_main_M} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              >
                <div className={`${styles.footer_links}`}>
                  <span
                    className={`${styles.footer_links_set_name} half-second`}
                  >
                    Series
                  </span>

                  <div className={`${styles.links_group}`}>
                    <ul className={`${styles.group_1}`}>
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S1", productsRouted);
                        }}
                      >
                        <span className="half-second">Demon Slayer</span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S2", productsRouted);
                        }}
                      >
                        <span className="half-second">
                          JoJo's Bizarre Adventure
                        </span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S3", productsRouted);
                        }}
                      >
                        <span className="half-second">Mob Psycho 100</span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S4", productsRouted);
                        }}
                      >
                        <span className="half-second">Vinland Saga</span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S5", productsRouted);
                        }}
                      >
                        <span className="half-second">My Hero Academia</span>
                      </li>
                    </ul>
                    <ul className={`${styles.group_2} footer-links`}>
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S6", productsRouted);
                        }}
                      >
                        <span className="half-second">Jujutsu Kaisen</span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S7", productsRouted);
                        }}
                      >
                        <span className="half-second">Attack On Titan</span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S8", productsRouted);
                        }}
                      >
                        <span className="half-second">Chainsaw Man</span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S9", productsRouted);
                        }}
                      >
                        <span className="half-second">Spy X Family</span>
                      </li>
                      <br />
                      <li
                        className="half-second products-link"
                        onClick={() => {
                          ExitAndRoute(router, "/products#S10", productsRouted);
                        }}
                      >
                        <span className="half-second">One Punch Man</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.footer_main_side} ${styles.footer_main_R} col-lg-2 col-md-2 col-sm-2 col-xs-2`}
              >
                <div className={`${styles.footer_links}`}>
                  <span
                    className={`${styles.footer_links_set_name} half-second`}
                  >
                    Types
                  </span>

                  <ul>
                    <li
                      className="half-second products-link"
                      onClick={() => {
                        ExitAndRoute(
                          router,
                          "/products#FIGURES",
                          productsRouted
                        );
                      }}
                    >
                      <span className="half-second">Figures</span>
                    </li>
                    <br />
                    <li
                      className="half-second products-link"
                      onClick={() => {
                        ExitAndRoute(router, "/products#MANGA", productsRouted);
                      }}
                    >
                      <span className="half-second">Manga</span>
                    </li>
                    <br />
                    <li
                      className="half-second products-link"
                      onClick={() => {
                        ExitAndRoute(
                          router,
                          "/products#CLOTHING",
                          productsRouted
                        );
                      }}
                    >
                      <span className="half-second">Clothing</span>
                    </li>
                    <br />
                    <li
                      className="half-second products-link"
                      onClick={() => {
                        ExitAndRoute(router, "/products", productsRouted);
                      }}
                    >
                      <span className="half-second">All Products</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className={`${styles.footer_bottom}`}>
          <motion.div
            className={`${styles.footer_bottom_box}`}
            initial="hidden"
            animate={FOOTER_CONTROLS}
            ref={FOOTER_REF}
            variants={FADE_IN}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={`${styles.footer_bottom_copyright}`}>
              <span
                className={`${styles.logo} half-second index-link`}
                onClick={() => {
                  ExitAndRoute(router, "/", indexRouted);
                }}
              >
                ANIMEX
              </span>
              <div>
                <FaCopyright className={`${styles.icon} half-second`} />

                <div>
                  <span className="half-second">2022</span> -{" "}
                  <span id="currentYear" className="half-second"></span>
                </div>
              </div>
            </div>
            <div className={`${styles.footer_bottom_info}`}>
              <ul className={styles.contact}>
                <li>
                  <span className="half-second">+1 (202) 555-0110</span>
                </li>
                <li>
                  <span className="half-second">pp101socials@gmail.com</span>
                </li>
              </ul>

              <ul className={styles.socials}>
                <li>
                  <FaTwitter className={`${styles.icon} half-second`} />
                </li>
                <li>
                  <FaFacebook className={`${styles.icon} half-second`} />
                </li>
                <li>
                  <FaInstagram className={`${styles.icon} half-second`} />
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
