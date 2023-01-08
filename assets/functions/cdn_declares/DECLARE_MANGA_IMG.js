/**
 *
 *  This is used to declare a manga product's image
 *
 */

export default function DeclareMangaImg(series, vol, file_type, part) {
  const HOSTING =
    "https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/";

  if (part) {
    // This is mostly for JoJo as the cdn is split into parts for this series
    return (
      HOSTING +
      `imgs/products/${series}/manga/${part}/${vol}/${vol}.${file_type}`
    );
  } else {
    return HOSTING + `imgs/products/${series}/manga/${vol}/${vol}.${file_type}`;
  }
}
