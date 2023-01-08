/**
 *
 *  This is used to declare a figure product's image
 *
 */

export default function DeclareFigureImg(series, figure, part) {
  const HOSTING =
    "https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/";

  if (part) {
    // This is mostly for JoJo as the cdn is split into parts for this series
    return (
      HOSTING +
      `imgs/products/${series}/figures/${part}/${figure}/${figure}.png`
    );
  } else {
    return HOSTING + `imgs/products/${series}/figures/${figure}/${figure}.png`;
  }
}
