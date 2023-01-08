/**
 *
 *  This is the back to top btn
 *
 */

import { useEffect } from "react";

import { FaCaretUp } from "react-icons/fa";

import CheckB2TStatus from "../../../functions/dom/checkers/CheckB2TStatus";

import styles from "../../../styles/modules/Misc/Misc.module.css";

export const B2T = () => {
  // B2T Status
  useEffect(() => {
    window.addEventListener("scroll", () => {
      CheckB2TStatus();
    });
    window.addEventListener("load", () => {
      CheckB2TStatus();
    });
  }, []);

  return (
    <button
      id="pageB2T"
      className={`${styles.b2t} half-second`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FaCaretUp className={`${styles.icon} half-second`} />
    </button>
  );
};
