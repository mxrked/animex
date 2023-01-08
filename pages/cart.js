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

import { CartTop } from "../assets/components/pages/Cart/CartTop";
import { CartItems } from "../assets/components/pages/Cart/CartItems";
import { CartCheckout } from "../assets/components/pages/Cart/CartCheckout";

// Style Imports
import "../assets/styles/modules/Cart/Cart.module.css";

export default function Cart() {
  const router = useRouter();

  // Disable Cart Links
  useEffect(() => {
    ManipPageLinks("disable", ".cart-link");
  }, []);

  return (
    <div id="PAGE" className="page half-second overrides_Cart">
      <HeadCnt
        title="ANIMEX - My Cart."
        description="Animex is your one stop shop for all things anime and manga related. Our store has a vast range of different products which include figures, manga and clothing items. We current sell items based on the following franchises: Demon Slayer, Jojo's Bizarre Adventure, Vinland Saga, Mob Psycho 100, My Hero Academia, Spy X Family, Jujutsu Kaisen, Attack on Titan, One Punch Man."
        keywords="animex, anime and manga store, anime manga store, ecommerce store, anime figures, anime manga, manga, anime clothing, animex home page, animex index, demon slayer, jojos bizarre adventure, jjba, jojo, mob psycho, mob psycho 100, vinland saga, my hero academia, mha, jujutsu kaisen, jjk, attack on titan, aot, spy x family, sxf, one punch man, opm"
        robots="index, follow"
        url="https://effervescent-churros-110c8b.netlify.app/cart/"
      />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />
      <B2T />

      <CartCheckout />

      <main id="PAGE_CNT" className="page-main full-second">
        <CartTop />
        <CartItems />

        <Footer />
      </main>
    </div>
  );
}
