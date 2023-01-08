/**
 *
 *  This is the index series
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";

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
} from "../../../cdn_returns/BGS";

import { FADE_LEFT } from "../../../animations/FM_ANIMATIONS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexSeries = () => {
  const router = useRouter();

  let productsRouted = false;

  // Scroll Fades
  const INDEX_SERIES_CONTROLS = useAnimation();
  const [INDEX_SERIES_REF, INDEX_SERIES_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (INDEX_SERIES_IN_VIEW) {
        INDEX_SERIES_CONTROLS.start("visible");
      }
    } else {
      INDEX_SERIES_CONTROLS.start("visible");
    }
  }, [INDEX_SERIES_CONTROLS, INDEX_SERIES_IN_VIEW]);

  return (
    <section
      id="indexSeries"
      className={`${styles.index_series} overrides_Index_Series`}
    >
      <motion.div
        className={`${styles.series_holder} fm-animate left-fade half-second`}
        initial="hidden"
        animate={INDEX_SERIES_CONTROLS}
        ref={INDEX_SERIES_REF}
        variants={FADE_LEFT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={`${styles.index_series_box} container-fluid`}>
          <div className={`${styles.index_series_row} row`}>
            <div
              className={`${styles.index_series_side} ${styles.index_series_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.index_series_side_cnt}`}>
                <h1 className="half-second">Browse By Series.</h1>
                <p className="half-second">
                  Currently, the products are related to the following
                  franchises:
                </p>
                <ul>
                  <li className="half-second">Demon Slayer</li>
                  <li className="half-second">JoJo's Bizarre Adventure</li>
                  <li className="half-second">Mob Psycho 100</li>
                  <li className="half-second">Vinland Saga</li>
                  <li className="half-second">My Hero Academia</li>
                  <li className="half-second">Jujutsu Kaisen</li>
                  <li className="half-second">Attack On Titan</li>
                  <li className="half-second">Chainsaw Man</li>
                  <li className="half-second">Spy X Family</li>
                  <li className="half-second">One Punch Man</li>
                </ul>

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
            </div>
            <div
              className={`${styles.index_series_side} ${styles.index_series_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_DEMON_SLAYER_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S1", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>Demon Slayer</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_JOJO_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S2", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>JoJo's Bizarre Adventure</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_MOB_PSYCHO_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S3", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>Mob Psycho 100</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_VINLAND_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S4", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>Vinland Saga</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_MHA_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S5", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>My Hero Academia</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_JJK_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S6", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>Jujutsu Kaisen</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_AOT_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S7", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>Attack On Titan</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_CHAINSAW_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S8", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>Chainsaw Man</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_SXF_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S9", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>Spy X Family</span>
                </div>
              </div>
              <div className={`${styles.series} half-second`}>
                <BackgroundImage
                  className={`${styles.bg}`}
                  src={PM_OPM_BG}
                  width="100%"
                  height="100%"
                />

                <div
                  className={`${styles.darken} half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/products#S10", productsRouted);
                    }, 1000);
                  }}
                >
                  <span>One Punch Man</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
