/**
 *
 *  This is used to return a bg
 *
 */

export default function DeclareBG(
  itemType,
  subFolder1,
  subFolder2,
  fileName,
  fileExt
) {
  const HOSTING =
    "https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/";
  var item;

  // Return an bg..
  if (itemType === "bg" || itemType === "bgs") {
    item =
      HOSTING +
      "bgs/" +
      subFolder1 +
      "/" +
      subFolder2 +
      "/" +
      fileName +
      "." +
      fileExt;
    return item;
  }
}
