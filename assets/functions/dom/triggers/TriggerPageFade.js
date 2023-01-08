/**
 *
 *  This is used to hide the page when routing starts
 *
 */

export default function TriggerPageFade(status) {
  if (status == "hide") {
    document.getElementById("PAGE").style.opacity = 0;
    document.getElementById("PAGE").style.visibility = "hidden";
  } else {
    document.getElementById("PAGE").style.opacity = 1;
    document.getElementById("PAGE").style.visibility = "visible";
  }
}
