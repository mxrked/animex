/**
 *
 *  This will hold all the non-product image cdns for the website
 *
 */

import DeclareImg from "../functions/cdn_declares/DECLARE_NON_PRODUCT_IMG";

const SEARCH_IMG = DeclareImg(
  "img",
  "search",
  "my_hero_academia_search_img",
  "webp"
);

const MINIMALIST_AOT = DeclareImg("img", "minimalist", "aot", "webp");
const MINIMALIST_MOB_PSYCHO = DeclareImg(
  "img",
  "minimalist",
  "mob-psycho",
  "webp"
);
const MINIMALIST_DEMON_SLAYER = DeclareImg(
  "img",
  "minimalist",
  "demon-slayer",
  "webp"
);
const MINIMALIST_JOJO = DeclareImg("img", "minimalist", "jojo", "webp");

export {
  SEARCH_IMG,
  MINIMALIST_AOT,
  MINIMALIST_DEMON_SLAYER,
  MINIMALIST_JOJO,
  MINIMALIST_MOB_PSYCHO,
};
