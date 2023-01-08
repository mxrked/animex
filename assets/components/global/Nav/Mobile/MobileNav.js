/**
 *
 *  This is the mobile nav
 *
 */

import { useEffect } from "react";

import { AboveNav } from "../Both/AboveNav";
import { NavLogo } from "../Both/NavLogo";
import { SideCnt } from "../Both/SideCnt";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "../../../../animations/FM_ANIMATIONS";

import ToggleMobileNavMenu from "../../../../functions/dom/togglers/ToggleMobileNavMenu";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  // Scroll Fades
  const M_NAV_CONTROLS = useAnimation();
  const [M_NAV_REF, M_NAV_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (M_NAV_IN_VIEW) {
        M_NAV_CONTROLS.start("visible");
      }
    } else {
      M_NAV_CONTROLS.start("visible");
    }
  }, [M_NAV_CONTROLS, M_NAV_IN_VIEW]);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <motion.div
        className="fm-animate half-second"
        initial="hidden"
        animate={M_NAV_CONTROLS}
        ref={M_NAV_REF}
        variants={FADE_IN}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <AboveNav />

        <div className={`${styles.mobile_nav_main}`}>
          <div
            className={`${styles.mobile_nav_main_inner} fm-animate in-fade half-second container-fluid`}
          >
            <div className={`${styles.mobile_nav_main_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_main_inner_side} ${styles.mobile_nav_main_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_main_inner_side_cnt}`}>
                  <NavLogo />
                </div>
              </div>
              <div
                className={`${styles.mobile_nav_main_inner_side} ${styles.mobile_nav_main_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_main_inner_side_cnt}`}>
                  <SideCnt />

                  <button
                    id="mobileNavToggler"
                    className={`${styles.mobile_nav_toggler}`}
                    onClick={() => {
                      ToggleMobileNavMenu();
                    }}
                  >
                    <span className="half-second" />
                    <span className="half-second" />
                    <span className="half-second" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
