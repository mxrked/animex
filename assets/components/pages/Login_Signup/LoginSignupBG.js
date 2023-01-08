/**
 *
 *  This is the login and signup page bg
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { LOGIN_SIGNUP_BG } from "../../../cdn_returns/BGS";

import styles from "../../../styles/modules/User/User.module.css";

export const LoginSignupBG = () => {
  return (
    <div id="loginSignupBG" className={`${styles.login_signup_bg}`}>
      <BackgroundImage
        src={LOGIN_SIGNUP_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />
    </div>
  );
};
