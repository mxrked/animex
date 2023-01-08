/**
 *
 *  This is used to toggle the search
 *
 */

import DeclareStorageVariable from "../../data/storages/DeclareStorageVariable";

export default function ToggleSearch() {
  const SEARCH = document.getElementById("search");

  DeclareStorageVariable("session", "Search Opened", true);

  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";
  SEARCH.style.display = "flex";

  setTimeout(() => {
    SEARCH.style.opacity = 1;
    SEARCH.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    SEARCH.style.pointerEvents = "auto";
    SEARCH.classList.remove("full-second");
  }, 1500);
}
