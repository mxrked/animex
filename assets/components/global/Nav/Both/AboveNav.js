/**
 *
 *  This is the above nav
 *
 */

import { useRouter } from "next/router";
import { useEffect } from "react";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import SignoutAccount from "../../../../functions/data/account/SignoutAccount";
import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const AboveNav = () => {
  const router = useRouter();

  let accountRouted,
    loginSignupRouted = false;

  // Displaying Account image
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("Logged In")) {
        document.querySelectorAll(".pfp").forEach((img) => {
          setTimeout(() => {
            if (
              localStorage.getItem(
                `Global ${
                  document.querySelector(".account-username").innerHTML
                } PFP`
              )
            ) {
              img.style.backgroundImage =
                "url(" +
                localStorage.getItem(
                  `Global ${
                    document.querySelector(".account-username").innerHTML
                  } PFP`
                ) +
                ")";
            }

            if (
              !localStorage.getItem(
                `Global ${
                  document.querySelector(".account-username").innerHTML
                } PFP`
              )
            ) {
              img.style.backgroundImage =
                "url(https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/imgs/non-product/stock_user.jpg)";
            }
          });
        }, 3200);
      }
    }, 100);
  }, []);

  return (
    <div id="aboveNav" className={`${styles.above_nav}`}>
      <div
        id="aboveNavInner"
        className={`${styles.above_nav_inner} above-nav-inner fm-animate in-fade half-second`}
      >
        <ul>
          <li className="half-second">
            <FaTwitter className={styles.icon} />
          </li>
          <li className="half-second">
            <FaFacebook className={styles.icon} />
          </li>
          <li className="half-second">
            <FaInstagram className={styles.icon} />
          </li>
        </ul>

        {/** This is used to display/hide the account link based on host */}
        <div className={`${styles.link_and_signout}`}>
          <div
            id="accountLink"
            className={`${styles.account_link} account-link`}
            onClick={() => {
              // Routes user to login/signup page if they are NOT logged in
              if (!localStorage.getItem("Logged In")) {
                ExitAndRoute(router, "/login_signup", loginSignupRouted);
              }

              // Routes user to account page if they are logged in
              if (localStorage.getItem("Logged In")) {
                ExitAndRoute(router, "/account", accountRouted);
              }
            }}
          >
            <div className="login-signup-link">
              <MdAccountCircle className={`${styles.icon} half-second`} />
              <span className="half-second">Login/Signup</span>
            </div>

            <div
              className={`${styles.account_username_holder} account-username-holder`}
            >
              {/** <MdAccountCircle className={`${styles.icon} half-second`} /> */}
              <div className={`${styles.pfp} pfp`} />
              <span className={`${styles.small_text} half-second`}>Hello,</span>
              <span
                className={`${styles.account_username} account-username half-second`}
                name="username"
              >
                undefined
              </span>
            </div>
          </div>

          <button
            className={`${styles.signout_btn} signout-btn`}
            onClick={() => {
              SignoutAccount(router);
            }}
          >
            <FaSignOutAlt className={`${styles.icon} half-second`} />
          </button>
        </div>
      </div>
    </div>
  );
};
