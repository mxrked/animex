/**
 *
 *  This is used to declare a clothing product's image
 *
 */

export default function DeclareClothingImg(series, clothing, part) {
  const HOSTING =
    "https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/";

  if (part) {
    // This is mostly for JoJo as the cdn is split into parts for this series
    return (
      HOSTING +
      `imgs/products/${series}/clothing/${part}/${clothing}/${clothing}.png`
    );
  } else {
    return (
      HOSTING + `imgs/products/${series}/clothing/${clothing}/${clothing}.png`
    );
  }
}
