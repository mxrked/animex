/**
 *
 *  This is used to return a icon
 *
 */

export default function DeclareIcon(itemType, subFolder, fileName, fileExt) {
  const HOSTING =
    "https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/";
  var item;

  // Return an icon..
  if (itemType === "icon" || itemType === "icons") {
    item = HOSTING + "icons/" + subFolder + "/" + fileName + "." + fileExt;
    return item;
  }
}
