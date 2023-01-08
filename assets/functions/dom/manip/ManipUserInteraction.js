/**
 *
 *  This is used to prevent/allow the user to interact with the site
 *  - scroll, click, etc.
 *
 */

export default function ManipUserInteraction(status) {
  if (status === true) {
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  } else {
    document.body.style.overflowY = "hidden";
    document.body.style.pointerEvents = "none";
  }
}
