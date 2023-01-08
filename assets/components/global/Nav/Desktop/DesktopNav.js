/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { AboveNav } from "../Both/AboveNav";
import { NavLogo } from "../Both/NavLogo";
import { SideCnt } from "../Both/SideCnt";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCaretDown } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { FADE_IN } from "../../../../animations/FM_ANIMATIONS";
import {
  PM_AOT_BG,
  PM_CHAINSAW_BG,
  PM_DEMON_SLAYER_BG,
  PM_JJK_BG,
  PM_JOJO_BG,
  PM_MHA_BG,
  PM_MOB_PSYCHO_BG,
  PM_OPM_BG,
  PM_SXF_BG,
  PM_VINLAND_BG,
} from "../../../../cdn_returns/BGS";

import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  let indexRouted,
    infoRouted,
    productsRouted,
    supportRouted = false;

  // Scroll Fades
  const D_NAV_CONTROLS = useAnimation();
  const [D_NAV_REF, D_NAV_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (D_NAV_IN_VIEW) {
        D_NAV_CONTROLS.start("visible");
      }
    } else {
      D_NAV_CONTROLS.start("visible");
    }
  }, [D_NAV_CONTROLS, D_NAV_IN_VIEW]);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <motion.div
        className="fm-animate half-second"
        initial="hidden"
        animate={D_NAV_CONTROLS}
        ref={D_NAV_REF}
        variants={FADE_IN}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <AboveNav />

        <div className={`${styles.desktop_nav_main}`}>
          <div
            className={`${styles.desktop_nav_main_inner} fm-animate in-fade half-second container-fluid`}
          >
            <div className={`${styles.desktop_nav_main_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_main_inner_side} ${styles.desktop_nav_main_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.desktop_nav_main_inner_side_cnt}`}>
                  <NavLogo />
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_main_inner_side} ${styles.desktop_nav_main_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.desktop_nav_main_inner_side_cnt}`}>
                  <ul>
                    <li
                      className="index-link half-second"
                      onClick={() => {
                        ExitAndRoute(router, "/", indexRouted);
                      }}
                    >
                      <span className="half-second">Home</span>
                    </li>
                    <li
                      className="info-link half-second"
                      onClick={() => {
                        ExitAndRoute(router, "/info", infoRouted);
                      }}
                    >
                      <span className="half-second">Info</span>
                    </li>
                    <li className="products-link half-second">
                      <input
                        type="checkbox"
                        id="desktopNavProductsToggler"
                        onBlur={() => {
                          setTimeout(() => {
                            document.getElementById(
                              "desktopNavProductsToggler"
                            ).checked = false;
                            document.getElementById(
                              "desktopNavProductsMenu"
                            ).style.display = "none";
                          }, 250);
                        }}
                        onChange={(e) => {
                          if (e.currentTarget.checked) {
                            document.getElementById(
                              "desktopNavProductsMenu"
                            ).style.display = "flex";
                          } else {
                            document.getElementById(
                              "desktopNavProductsMenu"
                            ).style.display = "none";
                          }
                        }}
                      />
                      <span className="half-second">Products</span>
                      <FaCaretDown className={`${styles.icon} half-second`} />
                    </li>
                    <li
                      className={`${styles.support_link} support-link half-second`}
                      onClick={() => {
                        ExitAndRoute(router, "/support", supportRouted);
                      }}
                    >
                      <span className="half-second">Support</span>
                    </li>
                  </ul>

                  <SideCnt />
                </div>
              </div>
            </div>
          </div>

          <div
            id="desktopNavProductsMenu"
            className={`${styles.desktop_nav_products_menu}`}
          >
            <div
              className={`${styles.desktop_nav_products_menu_L} ${styles.desktop_nav_products_menu_side}`}
            >
              <div className={styles.side_links}>
                <h2>Products</h2>

                <div
                  className={`${styles.side_link} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#FIGURES", productsRouted);
                  }}
                >
                  <span className="half-second">View Figures</span>
                </div>
                <br />
                <div
                  className={`${styles.side_link} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#MANGA", productsRouted);
                  }}
                >
                  <span className="half-second">View Manga</span>
                </div>
                <br />
                <div
                  className={`${styles.side_link} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#CLOTHING", productsRouted);
                  }}
                >
                  <span className="half-second">View Clothing</span>
                </div>
                <br />
                <div
                  className={`${styles.side_link} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products", productsRouted);
                  }}
                >
                  <span className="half-second">View All Products</span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_products_menu_R} ${styles.desktop_nav_products_menu_side}`}
            >
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_DEMON_SLAYER_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S1", productsRouted);
                  }}
                >
                  <span>Demon Slayer</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_JOJO_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S2", productsRouted);
                  }}
                >
                  <span>JoJo's Bizarre Adventure</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_MOB_PSYCHO_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S3", productsRouted);
                  }}
                >
                  <span>Mob Psycho 100</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_VINLAND_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S4", productsRouted);
                  }}
                >
                  <span>Vinland Saga</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_MHA_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S5", productsRouted);
                  }}
                >
                  <span>My Hero Academia</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_JJK_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S6", productsRouted);
                  }}
                >
                  <span>Jujutsu Kaisen</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_AOT_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S7", productsRouted);
                  }}
                >
                  <span>Attack On Titan</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_CHAINSAW_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S8", productsRouted);
                  }}
                >
                  <span>Chainsaw Man</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_SXF_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S9", productsRouted);
                  }}
                >
                  <span>Spy X Family</span>
                </div>
              </div>
              <div className={`${styles.product_series} half-second`}>
                <BackgroundImage
                  src={PM_OPM_BG}
                  className={`${styles.bg} half-second`}
                />
                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/products#S10", productsRouted);
                  }}
                >
                  <span>One Punch Man</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
