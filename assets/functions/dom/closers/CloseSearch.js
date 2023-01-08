/**
 *
 *  This is used to close the search
 *
 */

import RemoveStorageVariable from "../../data/storages/RemoveStorageVariable";

export default function CloseSearch() {
  const SEARCH = document.getElementById("search");
  const LINKS = document.getElementById("searchLinks");
  const LINKS_LI = LINKS.getElementsByTagName("li");

  for (let j = 0; j < LINKS_LI.length; j++) {
    LINKS_LI[j].style.display = "flex";
  }

  SEARCH.style.pointerEvents = "none";
  SEARCH.classList.add("full-second");
  document.querySelector(".search-ipt").blur();

  setTimeout(() => {
    SEARCH.style.opacity = 0;
    SEARCH.style.visibility = "hidden";
  }, 300);

  setTimeout(() => {
    RemoveStorageVariable("session", "Search Opened");
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";
  }, 1500);
}
