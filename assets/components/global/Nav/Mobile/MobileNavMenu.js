/**
 *
 *  This is the mobile nav
 *
 */

import { useRouter } from "next/router";

import { FaCaretDown, FaTimes } from "react-icons/fa";

import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";
import CloseMobileNavMenu from "../../../../functions/dom/closers/CloseMobileNavMenu";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  const router = useRouter();

  let indexRouted,
    infoRouted,
    productsRouted,
    supportRouted,
    cartRouted,
    favoritesRouted = false;

  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
        onClick={() => {
          CloseMobileNavMenu();
        }}
      />
      <div
        id="mobileNavMenuMain"
        className={`${styles.mobile_nav_menu_main} full-second`}
      >
        <div
          id="mobileNavMenuMainCnt"
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
        >
          <div className={`${styles.mobile_nav_menu_main_cnt_top}`}>
            <h1>Animex</h1>

            <button
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();
              }}
            >
              <FaTimes className={styles.icon} />
            </button>
          </div>

          <div
            className={`${styles.menu_link} index-link half-second`}
            onClick={() => {
              CloseMobileNavMenu();

              setTimeout(() => {
                ExitAndRoute(router, "/", indexRouted);
              }, 1800);
            }}
          >
            <span className="half-second">Home</span>
          </div>
          <div className={`${styles.menu_link} products-link half-second`}>
            <input
              type="checkbox"
              id="mobileMenuProductsCB"
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  document.getElementById("mobileMenuProducts").style.height =
                    "700px";
                } else {
                  document.getElementById("mobileMenuProducts").style.height =
                    "0";
                }
              }}
            />
            <span className="half-second">Products</span>
            <FaCaretDown className={`${styles.icon} half-second`} />
          </div>

          <ul id="mobileMenuProducts" className="half-second">
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">View All Products</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#FIGURES", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">View Figures</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#MANGA", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">View Manga</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#CLOTHING", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">View Clothing</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S1", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">Demon Slayer</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S2", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">JoJo's Bizarre Adventure</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S3", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">Mob Psycho</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S4", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">Vinland Saga</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S5", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">My Hero Academia</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S6", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">Jujutsu Kaisen</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S7", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">Attack On Titan</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S8", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">Chainsaw Man</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S9", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">Spy X Family</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  ExitAndRoute(router, "/products#S10", productsRouted);
                }, 1800);
              }}
            >
              <span className="half-second">One Punch Man</span>
            </li>
          </ul>

          <div
            className={`${styles.menu_link} info-link half-second`}
            onClick={() => {
              CloseMobileNavMenu();

              setTimeout(() => {
                ExitAndRoute(router, "/info", infoRouted);
              }, 1800);
            }}
          >
            <span className="half-second">Info</span>
          </div>
          <div
            className={`${styles.menu_link} support-link half-second`}
            onClick={() => {
              CloseMobileNavMenu();

              setTimeout(() => {
                ExitAndRoute(router, "/support", supportRouted);
              }, 1800);
            }}
          >
            <span className="half-second">Support</span>
          </div>
          <div
            className={`${styles.menu_link} cart-link half-second`}
            onClick={() => {
              CloseMobileNavMenu();

              setTimeout(() => {
                ExitAndRoute(router, "/cart", cartRouted);
              }, 1800);
            }}
          >
            <span className="half-second">Cart</span>
            <div className="half-second">
              <span className="cart-counter half-second">0</span>
            </div>
          </div>
          <div
            className={`${styles.menu_link} favorites-link half-second`}
            onClick={() => {
              CloseMobileNavMenu();

              setTimeout(() => {
                ExitAndRoute(router, "/favorites", favoritesRouted);
              }, 1800);
            }}
          >
            <span className="half-second">Favorites</span>
            <div className="half-second">
              <span className="favorites-counter half-second">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
