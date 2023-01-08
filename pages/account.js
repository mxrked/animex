// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Data/Functions/Images Imports
import ManipPageLinks from "../assets/functions/dom/manip/ManipPageLinks";

import { FADE_IN } from "../assets/animations/FM_ANIMATIONS";

// Component Imports
import { HeadCnt } from "../assets/components/global/Misc/HeadCnt";
import { DesktopNav } from "../assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "../assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "../assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "../assets/components/global/Nav/Both/Search";
import { Footer } from "../assets/components/global/Footer/Footer";
import { B2T } from "../assets/components/global/Misc/B2T";

import { Account_Profile } from "../assets/components/pages/Account/Account_Profile";
import { Account_Items } from "../assets/components/pages/Account/Account_Items";

// Style Imports
import "../assets/styles/modules/Account/Account.module.css";
import account_styles from "../assets/styles/modules/Account/Account.module.css";

export default function Account() {
  const router = useRouter();

  // Redirect user is on production server
  useEffect(() => {
    // If not logged in, take user back to home page
    if (!localStorage.getItem("Logged In")) {
      router.push("/");
    }

    // If not on localhost, take user back to home page
    if (sessionStorage.getItem("Enviroment:") !== "localhost") {
      router.push("/");
    }
  }, []);

  // Disable Index Links
  useEffect(() => {
    ManipPageLinks("disable", ".account-link");
  }, []);

  // Scroll Fades
  const ACCOUNT_CONTROLS = useAnimation();
  const [ACCOUNT_REF, ACCOUNT_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 50) {
      if (ACCOUNT_IN_VIEW) {
        ACCOUNT_CONTROLS.start("visible");
      }
    } else {
      ACCOUNT_CONTROLS.start("visible");
    }
  }, [ACCOUNT_CONTROLS, ACCOUNT_IN_VIEW]);

  return (
    <div id="PAGE" className="page half-second overrides_Account">
      <HeadCnt
        title="ANIMEX - My Account."
        description="Animex is your one stop shop for all things anime and manga related. Our store has a vast range of different products which include figures, manga and clothing items. We current sell items based on the following franchises: Demon Slayer, Jojo's Bizarre Adventure, Vinland Saga, Mob Psycho 100, My Hero Academia, Spy X Family, Jujutsu Kaisen, Attack on Titan, One Punch Man."
        keywords="animex, anime and manga store, anime manga store, ecommerce store, anime figures, anime manga, manga, anime clothing, animex home page, animex index, demon slayer, jojos bizarre adventure, jjba, jojo, mob psycho, mob psycho 100, vinland saga, my hero academia, mha, jujutsu kaisen, jjk, attack on titan, aot, spy x family, sxf, one punch man, opm"
        robots="index, follow"
        url="https://effervescent-churros-110c8b.netlify.app/account/"
      />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />
      <B2T />

      <main id="PAGE_CNT" className="page-main full-second">
        <motion.div
          className={`${account_styles.account_main_box} container-fluid fm-animate in-fade half-second`}
          initial="hidden"
          animate={ACCOUNT_CONTROLS}
          ref={ACCOUNT_REF}
          variants={FADE_IN}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className={`${account_styles.account_main_row} row`}>
            <div
              className={`${account_styles.account_main_side} ${account_styles.account_main_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <Account_Profile />
            </div>
            <div
              className={`${account_styles.account_main_side} ${account_styles.account_main_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <Account_Items />
            </div>
          </div>
        </motion.div>

        <Footer />
      </main>
    </div>
  );
}
