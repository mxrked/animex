/**
 *
 *  This is the index blog
 *
 */

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { FADE_LEFT } from "../../../animations/FM_ANIMATIONS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexBlog = (props) => {
  // Scroll Fades
  const INDEX_BLOG_CONTROLS = useAnimation();
  const [INDEX_BLOG_REF, INDEX_BLOG_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (INDEX_BLOG_IN_VIEW) {
        INDEX_BLOG_CONTROLS.start("visible");
      }
    } else {
      INDEX_BLOG_CONTROLS.start("visible");
    }
  }, [INDEX_BLOG_CONTROLS, INDEX_BLOG_IN_VIEW]);
  useEffect(() => {}, []);

  return (
    <section
      id="indexBlog"
      className={`${styles.index_blog} overrides_Index_Blog`}
    >
      <motion.div
        className={`${styles.blog_holder} fm-animate left-fade half-second`}
        initial="hidden"
        animate={INDEX_BLOG_CONTROLS}
        ref={INDEX_BLOG_REF}
        variants={FADE_LEFT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 className="half-second">Read Our Blog.</h1>

        <div className={`${styles.index_blog_box} container-fluid`}>
          <div className={`${styles.index_blog_row} row`}>
            {props.data.map((item) => (
              <div
                className={`${styles.blog_item} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
                id={styles[item.blogID]}
                key={item.blogID}
              >
                <div
                  className={`${styles.blog_item_inner} blog-item-inner half-second`}
                  onMouseEnter={(e) => {
                    document
                      .querySelectorAll(".blog-item-inner")
                      .forEach((item) => {
                        item.style.opacity = 0.5;
                        item.style.transform = "none";
                      });

                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    document
                      .querySelectorAll(".blog-item-inner")
                      .forEach((item) => {
                        item.style.opacity = 1;
                        item.style.transform = "none";
                      });
                  }}
                >
                  <div className={`${styles.blog_item_bg_holder}`}>
                    <BackgroundImage
                      src={item.blogImg}
                      width="100%"
                      height="100%"
                      className={`${styles.bg}`}
                    />
                  </div>

                  <div className={`${styles.blog_item_details}`}>
                    <div className={`${styles.blog_item_details_inner}`}>
                      <span className={`${styles.blog_name} half-second`}>
                        {item.blogName}
                      </span>
                      <span className={`${styles.blog_author} half-second`}>
                        By: {item.blogAuthor}
                      </span>
                      <span className={`${styles.blog_date} half-second`}>
                        {item.blogDate}
                      </span>
                      <p className="half-second">{item.blogDesc}</p>
                      <div className="half-second">
                        <span className="half-second">Read More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
