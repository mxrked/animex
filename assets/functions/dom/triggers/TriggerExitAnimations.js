/**
 *
 *  This is used to trigger exit animations
 *
 */

import TriggerPageFade from "./TriggerPageFade";

export default function TriggerExitAnimations() {
  TriggerPageFade("hide");

  if (document.querySelector(".fm-animate")) {
    document.querySelectorAll(".fm-animate").forEach((fade) => {
      fade.style.opacity = 0;
      fade.style.visibility = "hidden";
    });
  }
  if (document.querySelector(".down-fade")) {
    document.querySelectorAll(".down-fade").forEach((fade) => {
      fade.style.transform = "translateY(30px)";
    });
  }
  if (document.querySelector(".up-fade")) {
    document.querySelectorAll(".up-fade").forEach((fade) => {
      fade.style.transform = "translateY(-30px)";
    });
  }
  if (document.querySelector(".left-fade")) {
    document.querySelectorAll(".left-fade").forEach((fade) => {
      fade.style.transform = "translateX(30px)";
    });
  }
  if (document.querySelector(".right-fade")) {
    document.querySelectorAll(".right-fade").forEach((fade) => {
      fade.style.transform = "translateX(-30px)";
    });
  }
}
