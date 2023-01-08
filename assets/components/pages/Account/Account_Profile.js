/**
 *
 *  This is the account info
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BiShow, BiHide, BiImageAdd } from "react-icons/bi";

import ReturnUsername from "../../../functions/dom/returns/ReturnUsername";
import ReturnDecryptedValue from "../../../functions/dom/returns/ReturnDecryptedValue";
import DeclareStorageVariable from "../../../functions/data/storages/DeclareStorageVariable";
import RemoveStorageVariable from "../../../functions/data/storages/RemoveStorageVariable";
import SignoutAccount from "../../../functions/data/account/SignoutAccount";

import styles from "../../../styles/modules/Account/Account.module.css";

export const Account_Profile = () => {
  const router = useRouter();

  // Adding Account Profile Details to page
  useEffect(() => {
    if (localStorage.getItem("Username")) {
      setTimeout(() => {
        const ACCOUNT_USERNAME = ReturnUsername();
        const ACCOUNT_EMAIL = ReturnDecryptedValue(
          localStorage,
          "Logged In",
          "E_Email"
        );
        const ACCOUNT_PASSWORD = ReturnDecryptedValue(
          localStorage,
          "Logged In",
          "E_Password"
        );

        document.getElementById("accountUsername").value =
          " " + ACCOUNT_USERNAME;
        document.getElementById("accountEmail").value = " " + ACCOUNT_EMAIL;
        document.getElementById("accountPassword").value = "";

        // Making the password hidden by default
        for (let i = 0; i < ACCOUNT_PASSWORD.length; i++) {
          document.getElementById("accountPassword").value += "•";
        }

        document.getElementById("showPassword").style.display = "flex";
      }, 2000);
    }
  }, []);

  // Display pfp on load
  useEffect(() => {
    setTimeout(() => {
      if (router.pathname === "/account") {
        if (localStorage.getItem("Logged In")) {
          setTimeout(() => {
            // const USERNAME_VALUE =
            //   document.getElementById("accountUsername").value;

            if (
              localStorage.getItem(
                `Global ${
                  document.querySelector(".account-username").innerHTML
                } PFP`
              )
            ) {
              document.getElementById(
                "pfpImg"
              ).style.backgroundImage = `url(${localStorage.getItem(
                `Global ${
                  document.querySelector(".account-username").innerHTML
                } PFP`
              )})`;
            }

            if (
              !localStorage.getItem(
                `Global ${
                  document.querySelector(".account-username").innerHTML
                } PFP`
              )
            ) {
              document.getElementById("pfpImg").style.backgroundImage =
                "url(https://raw.githubusercontent.com/mxrked/animex_CDN/main/imgs/imgs/non-product/stock_user.jpg)";
            }
          }, 2000);
        }
      }
    }, 100);
  }, []);

  // Showing/Hiding Password
  useEffect(() => {
    const ACCOUNT_PASSWORD = ReturnDecryptedValue(
      localStorage,
      "Logged In",
      "E_Password"
    );

    document.getElementById("showPassword").addEventListener("click", () => {
      document.getElementById("showPassword").style.display = "none";
      document.getElementById("hidePassword").style.display = "flex";

      document.getElementById("accountPassword").value = ACCOUNT_PASSWORD;
    });

    document.getElementById("hidePassword").addEventListener("click", () => {
      document.getElementById("showPassword").style.display = "flex";
      document.getElementById("hidePassword").style.display = "none";

      document.getElementById("accountPassword").value = "";

      for (let i = 0; i < ACCOUNT_PASSWORD.length; i++) {
        document.getElementById("accountPassword").value += "•";
      }
    });

    // Hide password after the user hovers away from the details
    document
      .getElementById("profileDetails")
      .addEventListener("mouseleave", () => {
        document.getElementById("showPassword").style.display = "flex";
        document.getElementById("hidePassword").style.display = "none";

        document.getElementById("accountPassword").value = "";

        for (let i = 0; i < ACCOUNT_PASSWORD.length; i++) {
          document.getElementById("accountPassword").value += "•";
        }
      });
  }, []);

  return (
    <section id="accountProfile" className={`${styles.account_profile}`}>
      <span className={`${styles.account_profile_heading} half-second`}>
        My Profile
      </span>

      <div className={`${styles.account_profile_img_holder}`}>
        <div id="pfpImg" className={`${styles.pfp}`} />

        <input
          type="file"
          id="pfp"
          onChange={(e) => {
            // Storing the profile picture into localStorage
            const READER = new FileReader();

            READER.addEventListener("load", () => {
              RemoveStorageVariable(
                "local",
                `Global ${
                  document.querySelector(".account-username").innerHTML
                } PFP`
              );

              DeclareStorageVariable(
                "local",
                `Global ${
                  document.querySelector(".account-username").innerHTML
                } PFP`,
                READER.result
              );
            });

            READER.readAsDataURL(e.target.files[0]);
            document.getElementById("pfpImg").style.backgroundImage = "";

            setTimeout(() => {
              if (
                localStorage.getItem(
                  `Global ${
                    document.querySelector(".account-username").innerHTML
                  } PFP`
                )
              ) {
                document.getElementById(
                  "pfpImg"
                ).style.backgroundImage = `url(${localStorage.getItem(
                  `Global ${
                    document.querySelector(".account-username").innerHTML
                  } PFP`
                )})`;

                // Updating AboveNav image
                document.querySelectorAll(".pfp").forEach((img) => {
                  img.style.backgroundImage =
                    "url(" +
                    localStorage.getItem(
                      `Global ${
                        document.querySelector(".account-username").innerHTML
                      } PFP`
                    ) +
                    ")";
                });
              }
            }, 200);
          }}
        />

        <div className={`${styles.darken} half-second`}>
          <BiImageAdd className={`${styles.icon}`} />
        </div>
      </div>

      <div className={`${styles.account_profile_details}`} id="profileDetails">
        <span className="half-second">Profile Details</span>

        <form
          noValidate
          id="profileForm"
          method="POST"
          onSubmit={(e) => {
            e.currentTarget.action = "/api/deleteUser";
          }}
        >
          <div className={`${styles.detail}`}>
            <input
              id="accountUsername"
              name="username"
              disabled
              className={`${styles.username} half-second`}
            />
          </div>
          <div className={`${styles.detail}`}>
            <input
              id="accountEmail"
              name="email"
              disabled
              className={`${styles.email} half-second`}
            />
          </div>
          <div className={`${styles.detail}`}>
            <input
              id="accountPassword"
              name="password"
              disabled
              className={`${styles.email} half-second`}
            />

            <div>
              <button
                id="showPassword"
                type={"button"}
                className={`${styles.password_btn} ${styles.show_btn} half-second password-btn`}
              >
                <BiShow className={`${styles.icon}`} />
              </button>
              <button
                type={"button"}
                id="hidePassword"
                className={`${styles.password_btn} ${styles.hide_btn} half-second password-btn`}
              >
                <BiHide className={`${styles.icon}`} />
              </button>
            </div>
          </div>

          <div className={`${styles.signout_account_holder}`}>
            <div className={`${styles.signout_account_holder_inner}`}>
              <div
                className={`${styles.signout_account} half-second`}
                onClick={() => {
                  SignoutAccount(router);
                }}
              >
                Sign Out?
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
