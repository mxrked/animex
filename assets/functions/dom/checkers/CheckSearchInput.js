/**
 *
 *  This is used to filter/display a link based on input value
 *
 */

// Array imports
import {
  INDEX_KWS,
  INFO_KWS,
  PRODUCTS_KWS,
  FIGURES_KWS,
  MANGA_KWS,
  CLOTHING_KWS,
  DEMON_SLAYER_KWS,
  JOJO_KWS,
  MOB_PSYCHO_KWS,
  VINLAND_KWS,
  MY_HERO_ACADEMIA_KWS,
  JUJUTSU_KAISEN_KWS,
  ATTACK_ON_TITAN_KWS,
  CHAINSAW_MAN_KWS,
  SPY_X_FAMILY_KWS,
  ONE_PUNCH_MAN_KWS,
  SUPPORT_KWS,
  CART_KWS,
  FAVORITE_KWS,
} from "../../../data/variables/ARRAYS";

function DisplayLinkBasedOnKWS(kws, input, link) {
  for (let i = 0; i < kws.length; i++) {
    if (input.value.toLowerCase().indexOf(kws[i]) > -1) {
      link.style.display = "flex";
    }
  }
}

export default function CheckSearchInput() {
  const INPUT = document.getElementById("searchIpt");
  const LINKS = document.getElementById("searchLinks");
  const FILTER = INPUT.value.toUpperCase();
  const LINKS_LI = LINKS.getElementsByTagName("li");

  for (let j = 0; j < LINKS_LI.length; j++) {
    const SPAN = LINKS_LI[j].getElementsByTagName("span")[0];
    const TXTVALUE = SPAN.textContent || SPAN.innerText;

    if (TXTVALUE.toUpperCase().indexOf(FILTER) > -1) {
      LINKS_LI[j].style.display = "";
    } else {
      LINKS_LI[j].style.display = "none";
    }
  }

  // Displays the different links if user inputs a certain word or pairing
  DisplayLinkBasedOnKWS(INDEX_KWS, INPUT, LINKS_LI[0]);
  DisplayLinkBasedOnKWS(PRODUCTS_KWS, INPUT, LINKS_LI[1]);
  DisplayLinkBasedOnKWS(FIGURES_KWS, INPUT, LINKS_LI[2]);
  DisplayLinkBasedOnKWS(MANGA_KWS, INPUT, LINKS_LI[3]);
  DisplayLinkBasedOnKWS(CLOTHING_KWS, INPUT, LINKS_LI[4]);
  DisplayLinkBasedOnKWS(DEMON_SLAYER_KWS, INPUT, LINKS_LI[5]);
  DisplayLinkBasedOnKWS(JOJO_KWS, INPUT, LINKS_LI[6]);
  DisplayLinkBasedOnKWS(MOB_PSYCHO_KWS, INPUT, LINKS_LI[7]);
  DisplayLinkBasedOnKWS(VINLAND_KWS, INPUT, LINKS_LI[8]);
  DisplayLinkBasedOnKWS(MY_HERO_ACADEMIA_KWS, INPUT, LINKS_LI[9]);
  DisplayLinkBasedOnKWS(JUJUTSU_KAISEN_KWS, INPUT, LINKS_LI[10]);
  DisplayLinkBasedOnKWS(ATTACK_ON_TITAN_KWS, INPUT, LINKS_LI[11]);
  DisplayLinkBasedOnKWS(CHAINSAW_MAN_KWS, INPUT, LINKS_LI[12]);
  DisplayLinkBasedOnKWS(SPY_X_FAMILY_KWS, INPUT, LINKS_LI[13]);
  DisplayLinkBasedOnKWS(ONE_PUNCH_MAN_KWS, INPUT, LINKS_LI[14]);
  DisplayLinkBasedOnKWS(INFO_KWS, INPUT, LINKS_LI[15]);
  DisplayLinkBasedOnKWS(SUPPORT_KWS, INPUT, LINKS_LI[16]);
  DisplayLinkBasedOnKWS(CART_KWS, INPUT, LINKS_LI[17]);
  DisplayLinkBasedOnKWS(FAVORITE_KWS, INPUT, LINKS_LI[18]);
}
