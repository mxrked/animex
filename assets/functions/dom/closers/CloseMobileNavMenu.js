/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import RemoveStorageVariable from "../../data/storages/RemoveStorageVariable";

export default function CloseMobileNavMenu() {
  const MENU = document.getElementById("mobileNavMenu");
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MENU_MAIN = document.getElementById("mobileNavMenuMain");
  const MENU_MAIN_CNT = document.getElementById("mobileNavMenuMainCnt");

  RemoveStorageVariable("session", "Mobile Nav Opened");

  MENU.style.pointerEvents = "none";
  MENU_MAIN.style.overflowY = "hidden";
  MENU_MAIN_CNT.style.opacity = 0;
  MENU_MAIN_CNT.style.visibility = "hidden";
  document.getElementById("mobileMenuProductsCB").checked = false;
  document.getElementById("mobileMenuProducts").style.height = "0";

  setTimeout(() => {
    MENU_MAIN.style.transform = "translateX(100%)";
  }, 500);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 800);

  setTimeout(() => {
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";
  }, 1650);
}
