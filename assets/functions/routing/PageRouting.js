/**
 *
 *  This is used to route through different pages
 *
 */

import DeclareStorageValue from "../data/storages/DeclareStorageVariable";
import RemoveStorageVariable from "../data/storages/RemoveStorageVariable";

// Gets the route
function GetRoute(rooter, route) {
  const env = process.env.NODE_ENV;

  // On Client
  if (env == "development") {
    if (rooter.pathname == route) {
      console.log("You are already on that page..");
    } else {
      rooter.push(route, undefined, { shallow: true });
    }
  }

  // On Server
  if (rooter.pathname == route) {
    console.log("You are already on that page..");
  } else {
    rooter.push(route, undefined, { shallow: true });
  }
}

export default function PageRouting(rooter, route, checkRoute) {
  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";
  window.scrollTo(0, 0);

  if (sessionStorage.getItem("NULL Error Prevention")) {
    RemoveStorageVariable("session", "NULL Error Prevention");
  }

  // Making sure the user is at/not at the top of the page before routing
  DeclareStorageValue("session", "Page Routing", true);
  // window.scrollTo(0, 0);
  setTimeout(() => {
    if (window.scrollY !== 0 || window.scrollY === 0) {
      checkRoute = true;
      setTimeout(() => {
        GetRoute(rooter, route);
      }, 100);
    }
  }, 1000);

  // Forces user to page with refresh
  setTimeout(() => {
    if (!checkRoute) {
      rooter.reload();
    }
  }, 1050);
}
