/**
 *
 *  This is the nav logo
 *
 */

import { useRouter } from "next/router";

import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const NavLogo = () => {
  const router = useRouter();

  let indexRouted = false;

  return (
    <div
      id="navLogo"
      className={`${styles.nav_logo} index-link half-second`}
      onClick={() => {
        ExitAndRoute(router, "/", indexRouted);
      }}
    >
      <h1 className="half-second">ANIMEX</h1>
    </div>
  );
};
