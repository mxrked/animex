/**
 *
 *  This is used to trigger the exit animations and route to another page
 *
 */

import TriggerExitAnimations from "../dom/triggers/TriggerExitAnimations";
import PageRouting from "./PageRouting";

export default function ExitAndRoute(rooter, route, checkRoute) {
  TriggerExitAnimations(); // Triggers the exit animations

  // Waits a sec and then routes
  setTimeout(() => {
    PageRouting(rooter, route, checkRoute);
  }, 1000);
}
