// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLinks from "../assets/functions/dom/manip/ManipPageLinks";
import { INDEX_PRODUCTS } from "../assets/data/variables/ARRAYS";

// Component Imports
import { HeadCnt } from "../assets/components/global/Misc/HeadCnt";
import { DesktopNav } from "../assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "../assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "../assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "../assets/components/global/Nav/Both/Search";
import { Footer } from "../assets/components/global/Footer/Footer";
import { B2T } from "../assets/components/global/Misc/B2T";
import { CheckoutAlert } from "../assets/components/pages/Index/CheckoutAlert";

import { IndexTop } from "../assets/components/pages/Index/IndexTop";
import { IndexProducts } from "../assets/components/pages/Index/IndexProducts";
import { IndexSeries } from "../assets/components/pages/Index/IndexSeries";
import { IndexInfo } from "../assets/components/pages/Index/IndexInfo";
import { IndexBlog } from "../assets/components/pages/Index/IndexBlog";
import { IndexContact } from "../assets/components/pages/Index/IndexContact";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export const getStaticProps = async () => {
  const blogItemsRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/animex_CDN/main/json/BLOG_ITEMS.json"
  );

  const blogItemsData = await blogItemsRes.json();

  return {
    props: {
      display_blog_items: blogItemsData,
    },
  };
};

export default function Home({ display_blog_items }) {
  const router = useRouter();

  // Disable Index Links
  useEffect(() => {
    ManipPageLinks("disable", ".index-link");
  }, []);

  // Checks for checkout successful hash
  useEffect(() => {
    const CHECKOUT_ALERT = document.getElementById("checkoutAlert");

    if (router.asPath.indexOf("#CHECKOUT_SUCCESSFUL") > -1) {
      // alert("Checkout Successful - Thanks for stopping by!");

      setTimeout(() => {
        history.pushState("", "", window.location.pathname);
      }, 400);

      setTimeout(() => {
        CHECKOUT_ALERT.style.transform = "translateY(0)";
      }, 1200);

      setTimeout(() => {
        document.querySelector("#checkoutAlert span").style.opacity = 1;
        document.querySelector("#checkoutAlert span").style.visibility =
          "visible";
      }, 1400);

      setTimeout(() => {
        document.querySelector("#checkoutAlert span").style.opacity = 0;
        document.querySelector("#checkoutAlert span").style.visibility =
          "hidden";

        CHECKOUT_ALERT.style.transform = "translateY(-100%)";
      }, 3500);
    }
  }, []);

  return (
    <div id="PAGE" className="page half-second overrides_Index">
      <HeadCnt
        title="ANIMEX - All things anime and manga."
        description="Animex is your one stop shop for all things anime and manga related. Our store has a vast range of different products which include figures, manga and clothing items. We current sell items based on the following franchises: Demon Slayer, Jojo's Bizarre Adventure, Vinland Saga, Mob Psycho 100, My Hero Academia, Spy X Family, Jujutsu Kaisen, Attack on Titan, One Punch Man."
        keywords="animex, anime and manga store, anime manga store, ecommerce store, anime figures, anime manga, manga, anime clothing, animex home page, animex index, demon slayer, jojos bizarre adventure, jjba, jojo, mob psycho, mob psycho 100, vinland saga, my hero academia, mha, jujutsu kaisen, jjk, attack on titan, aot, spy x family, sxf, one punch man, opm"
        robots="index, follow"
        url="https://effervescent-churros-110c8b.netlify.app/"
      />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />
      <B2T />

      <CheckoutAlert />

      <main id="PAGE_CNT" className="page-main full-second">
        <IndexTop />
        <IndexProducts products={INDEX_PRODUCTS} />
        <IndexSeries />
        <IndexInfo />
        <IndexBlog data={display_blog_items} />
        <IndexContact />
        <Footer />
      </main>
    </div>
  );
}
