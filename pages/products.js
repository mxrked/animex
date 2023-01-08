// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLinks from "../assets/functions/dom/manip/ManipPageLinks";

// Component Imports
import { HeadCnt } from "../assets/components/global/Misc/HeadCnt";
import { DesktopNav } from "../assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "../assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "../assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "../assets/components/global/Nav/Both/Search";
import { Footer } from "../assets/components/global/Footer/Footer";
import { B2T } from "../assets/components/global/Misc/B2T";

// Style Imports
import "../assets/styles/modules/Products/Products.module.css";

export default function Products() {
  const router = useRouter();

  // Disable Info Links
  useEffect(() => {
    ManipPageLinks("disable", ".products-link");
  }, []);

  return (
    <div id="PAGE" className="page half-second overrides_Products">
      <HeadCnt
        title="ANIMEX - Store/Products"
        description="Animex is your one stop shop for all things anime and manga related. Our store has a vast range of different products which include figures, manga and clothing items. We current sell items based on the following franchises: Demon Slayer, Jojo's Bizarre Adventure, Vinland Saga, Mob Psycho 100, My Hero Academia, Spy X Family, Jujutsu Kaisen, Attack on Titan, One Punch Man."
        keywords="animex, anime and manga store, anime manga store, ecommerce store, anime figures, anime manga, manga, anime clothing, animex home page, animex index, demon slayer, jojos bizarre adventure, jjba, jojo, mob psycho, mob psycho 100, vinland saga, my hero academia, mha, jujutsu kaisen, jjk, attack on titan, aot, spy x family, sxf, one punch man, opm"
        robots="index, follow"
        url="https://effervescent-churros-110c8b.netlify.app/products/"
      />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />
      <B2T />

      <main id="PAGE_CNT" className="page-main full-second">
        <Footer />
      </main>
    </div>
  );
}
