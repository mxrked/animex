/**
 *
 *  This is the index info
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
  MINIMALIST_JOJO,
  MINIMALIST_DEMON_SLAYER,
  MINIMALIST_AOT,
  MINIMALIST_MOB_PSYCHO,
} from "../../../cdn_returns/NON_PRODUCT_IMGS";
import { FADE_RIGHT } from "../../../animations/FM_ANIMATIONS";

import styles from "../../../styles/modules/Index/Index.module.css";

// This is used to make cleaner code instead of having repeated divs
const IndexInfoBgSet = (props) => {
  return (
    <div
      className={`${styles.index_info_img_holder} ${styles[props.bg_class]}`}
    >
      <BackgroundImage
        className={`${styles.bg} ${styles.false_img} info-false-img half-second`}
        src={props.bg}
        width="100%"
        height="100%"
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
        className={`${styles.bg}`}
        src={props.bg}
        width="100%"
        height="100%"
        onMouseEnter={() => {
          // Hiding the dark false img
          document.querySelectorAll(".info-false-img")[
            props.false_img
          ].style.opacity = 0;
          document.querySelectorAll(".info-false-img")[
            props.false_img
          ].style.visibility = "hidden";
        }}
        onMouseLeave={() => {
          // Showing the dark false img
          document.querySelectorAll(".info-false-img")[
            props.false_img
          ].style.opacity = 1;
          document.querySelectorAll(".info-false-img")[
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

export const IndexInfo = () => {
  const router = useRouter();

  let infoRouted = false;

  // Scroll Fades
  const INDEX_INFO_CONTROLS = useAnimation();
  const [INDEX_INFO_REF, INDEX_INFO_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (INDEX_INFO_IN_VIEW) {
        INDEX_INFO_CONTROLS.start("visible");
      }
    } else {
      INDEX_INFO_CONTROLS.start("visible");
    }
  }, [INDEX_INFO_CONTROLS, INDEX_INFO_IN_VIEW]);

  return (
    <section
      id="indexInfo"
      className={`${styles.index_info} overrides_Index_Info`}
    >
      <motion.div
        className={`${styles.info_holder} fm-animate right-fade half-second`}
        initial="hidden"
        animate={INDEX_INFO_CONTROLS}
        ref={INDEX_INFO_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={`${styles.index_info_box} container-fluid`}>
          <div className={`${styles.index_info_row} row`}>
            <div
              className={`${styles.index_info_side} ${styles.index_info_L} col-lg-6 col-md-6 col-sm-6 col-xs-6 order-lg-0 order-md-1 order-sm-1 order-1`}
            >
              <div className={`${styles.index_info_imgs}`}>
                <IndexInfoBgSet
                  bg={MINIMALIST_JOJO}
                  bg_class="jojo_img"
                  false_img={0}
                />
                <IndexInfoBgSet
                  bg={MINIMALIST_AOT}
                  bg_class="aot_img"
                  false_img={1}
                />
                <IndexInfoBgSet
                  bg={MINIMALIST_MOB_PSYCHO}
                  bg_class="mob_psycho_img"
                  false_img={2}
                />
                <IndexInfoBgSet
                  bg={MINIMALIST_DEMON_SLAYER}
                  bg_class="demon_slayer_img"
                  false_img={3}
                />
              </div>
            </div>
            <div
              className={`${styles.index_info_side} ${styles.index_info_R} col-lg-6 col-md-6 col-sm-6 col-xs-6 order-lg-1 order-md-0 order-sm-0 order-0`}
            >
              <div className={`${styles.index_info_side_cnt}`}>
                <h1>Our Background.</h1>
                <p className="half-second">
                  Learn more about us as a company and understand the way we do
                  things for our customers and employees.
                </p>
                <div
                  className="half-second"
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/info", infoRouted);
                    }, 1000);
                  }}
                >
                  <span className="half-second">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
