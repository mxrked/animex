/**
 *
 *  This is the index top slider
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";
import Slider from "react-slick";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";
import ManipBackgroundYMove from "../../../functions/dom/manip/ManipBackgroundYMove";

import { FADE_DOWN } from "../../../animations/FM_ANIMATIONS";
import {
  INDEX_TOP_S1_BG,
  INDEX_TOP_S2_BG,
  INDEX_TOP_S3_BG,
  INDEX_TOP_S4_BG,
} from "../../../cdn_returns/BGS";

import styles from "../../../styles/modules/Index/Index.module.css";

const Slide = (props) => {
  const router = useRouter();

  let productsRouted = false;

  return (
    <div
      className={`${styles.index_top_slide} index-top-slide`}
      id={`${styles[props.slideID]}`}
      onMouseMove={(e) => {
        const Y = e.clientY;
        const CALCULATED_Y = Y / (window.innerHeight / 3);
        ManipBackgroundYMove(
          e.currentTarget.closest(".index-top-slide").querySelector(".bg"),
          CALCULATED_Y
        );
      }}
    >
      <BackgroundImage
        src={props.slideBG}
        className={`${styles.bg} bg`}
        width="100%"
        height="100%"
      />

      <div className={`${styles.darken} darken half-second`}>
        <div className={`${styles.darken_inner} darken-inner`}>
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          <div
            className={`${styles.link} half-second`}
            onClick={() => {
              TriggerExitAnimations();

              setTimeout(() => {
                PageRouting(router, props.route, productsRouted);
              }, 1000);
            }}
          >
            <span className="half-second">Browse</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndexTop = () => {
  const SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 15000,
    focusOnSelect: false,
    pauseOnFocus: false,
    responsive: [],
  };

  // Scroll Fades
  const INDEX_TOP_CONTROLS = useAnimation();
  const [INDEX_TOP_REF, INDEX_TOP_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (INDEX_TOP_IN_VIEW) {
        INDEX_TOP_CONTROLS.start("visible");
      }
    } else {
      INDEX_TOP_CONTROLS.start("visible");
    }
  }, [INDEX_TOP_CONTROLS, INDEX_TOP_IN_VIEW]);

  return (
    <section
      id="indexTop"
      className={`${styles.index_top} overrides_Index_Top`}
    >
      <motion.div
        className={`${styles.slider_holder} fm-animate down-fade half-second`}
        initial="hidden"
        animate={INDEX_TOP_CONTROLS}
        ref={INDEX_TOP_REF}
        variants={FADE_DOWN}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Slider
          {...SLIDER_SETTINGS}
          className={`${styles.index_top_slider}`}
          id="indexTopSlider"
        >
          <Slide
            slideID="S_1"
            slideBG={INDEX_TOP_S1_BG}
            h1="Browse Our Store."
            p="Our store hosts a wide selection of different products which range from figures, manga, and clothing."
            route="/products"
          />
          <Slide
            slideID="S_2"
            slideBG={INDEX_TOP_S2_BG}
            h1="Our Figures."
            p="Get a look at our figures that we have for sale. All ranging from different anime and manga series."
            route="/products#FIGURES"
          />
          <Slide
            slideID="S_3"
            slideBG={INDEX_TOP_S3_BG}
            h1="Our Manga."
            p="Get a look at our manga that we have for sale. All ranging from different anime and manga series."
            route="/products#MANGA"
          />
          <Slide
            slideID="S_4"
            slideBG={INDEX_TOP_S4_BG}
            h1="Our Clothing."
            p="Get a look at our clothing that we have for sale. All ranging from different anime and manga series."
            route="/products#CLOTHING"
          />
        </Slider>
      </motion.div>
    </section>
  );
};
