/**
 *
 *  This is the index contact
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";
import ManipBackgroundYMove from "../../../functions/dom/manip/ManipBackgroundYMove";

import {
  OPM_CONTACT_BG,
  JJK_CONTACT_BG,
  VINLAND_CONTACT_BG,
} from "../../../cdn_returns/BGS";

import { FADE_RIGHT } from "../../../animations/FM_ANIMATIONS";

import styles from "../../../styles/modules/Index/Index.module.css";

// This is used to make cleaner code instead of having repeated divs
const IndexContactBgSet = (props) => {
  return (
    <div className={styles.bg_holder}>
      <BackgroundImage
        src={props.bg}
        className={`${styles.bg} ${styles.false_img} half-second contact-false-img`}
        width="100%"
        onMouseEnter={(e) => {
          // Hiding the dark false img
          e.currentTarget.style.opacity = 0;
          e.currentTarget.style.visibility = "hidden";
        }}
        onMouseLeave={(e) => {
          // Showing the dark false img
          e.currentTarget.style.opacity = 1;
          e.currentTarget.style.visibility = "visible";
        }}
      />
      <BackgroundImage
        src={props.bg}
        width="100%"
        className={`${styles.bg} ${styles[props.bg_class]} contact-bg`}
        onMouseEnter={() => {
          // Hiding the dark false img
          document.querySelectorAll(".contact-false-img")[
            props.false_img
          ].style.opacity = 0;
          document.querySelectorAll(".contact-false-img")[
            props.false_img
          ].style.visibility = "hidden";
        }}
        onMouseLeave={() => {
          // Showing the dark false img
          document.querySelectorAll(".contact-false-img")[
            props.false_img
          ].style.opacity = 1;
          document.querySelectorAll(".contact-false-img")[
            props.false_img
          ].style.visibility = "visible";
        }}
        onMouseMove={(e) => {
          // Moving the img on its Y axis
          const Y = e.clientY;
          const CALCULATED_Y = Y / (window.innerHeight / 5);
          ManipBackgroundYMove(e.currentTarget, CALCULATED_Y);
        }}
      />
    </div>
  );
};

export const IndexContact = () => {
  const router = useRouter();

  let supportRouted = false;

  // Scroll Fades
  const INDEX_CONTACT_CONTROLS = useAnimation();
  const [INDEX_CONTACT_REF, INDEX_CONTACT_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (INDEX_CONTACT_IN_VIEW) {
        INDEX_CONTACT_CONTROLS.start("visible");
      }
    } else {
      INDEX_CONTACT_CONTROLS.start("visible");
    }
  }, [INDEX_CONTACT_CONTROLS, INDEX_CONTACT_IN_VIEW]);

  return (
    <section
      id="indexContact"
      className={`${styles.index_contact} overrides_Index_Contact`}
    >
      <motion.div
        className={`${styles.contact_holder} fm-animate right-fade half-second`}
        initial="hidden"
        animate={INDEX_CONTACT_CONTROLS}
        ref={INDEX_CONTACT_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={`${styles.index_contact_box} container-fluid`}>
          <div className={`${styles.index_contact_row} row`}>
            <div
              className={`${styles.index_contact_side} ${styles.index_contact_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.index_contact_side_cnt}`}>
                <h1>Get In Touch.</h1>
                <p className="half-second">
                  We want to make sure all of our customers get the best
                  experience possible. You can request help if you have an issue
                  that needs to be resolved.
                </p>
                <div
                  className="half-second"
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/support", supportRouted);
                    }, 1000);
                  }}
                >
                  <span className="half-second">Learn More</span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.index_contact_side} ${styles.index_contact_R} index-contact-side col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.index_contact_bgs} contact-bgs`}>
                <IndexContactBgSet
                  bg={OPM_CONTACT_BG}
                  bg_class="opm_bg"
                  false_img={0}
                />
                <IndexContactBgSet
                  bg={JJK_CONTACT_BG}
                  bg_class="jjk_bg"
                  false_img={1}
                />
                <IndexContactBgSet
                  bg={VINLAND_CONTACT_BG}
                  bg_class="vinland_bg"
                  false_img={2}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
