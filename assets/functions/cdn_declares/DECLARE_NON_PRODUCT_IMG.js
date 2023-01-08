/**
 *
 *  This is used to return a image
 *
 */

export default function DeclareImg(itemType, subFolder, fileName, fileExt) {
  const HOSTING =
    "https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/";
  var item;

  // Return an image..
  if (itemType === "img" || itemType === "imgs") {
    item =
      HOSTING +
      "imgs/non-product/" +
      subFolder +
      "/" +
      fileName +
      "." +
      fileExt;
    return item;
  }
}
