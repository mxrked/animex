/**
 *
 *  This is the login and signup page forms
 *
 */

import { useRouter } from "next/router";

import { FaHome } from "react-icons/fa";
import CryptoAES from "crypto-js/aes";

import {
  CART_ITEMS,
  CART_ITEM_QUANTITIES,
  FAVORITE_ITEMS,
} from "../../../data/variables/ARRAYS";

import ExitAndRoute from "../../../functions/routing/ExitAndRoute";
import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import DeclareStorageVariable from "../../../functions/data/storages/DeclareStorageVariable";
import RemoveStorageVariable from "../../../functions/data/storages/RemoveStorageVariable";
import CheckLoginFormInputs from "../../../functions/dom/checkers/account/CheckLoginFormInputs";
import CheckSignupFormInputs from "../../../functions/dom/checkers/account/CheckSignupFormInputs";

import styles from "../../../styles/modules/User/User.module.css";

const SignupForm = () => {
  return (
    <form
      noValidate
      id="signupForm"
      className={`${styles.form} ${styles.signup_form}`}
      method="POST"
      onSubmit={(e) => {
        let passed = CheckSignupFormInputs();

        if (!passed) {
          e.preventDefault();
          // Style inputs..
        }

        if (passed) {
          e.currentTarget.action = "/api/signupUser";
        }
      }}
    >
      <div className={`${styles.form_sets_holder}`}>
        <div className={`${styles.form_set}`}>
          <label for="signupUsername">Username</label>
          <input
            name="username"
            id="signupUsername"
            type="text"
            className="register-input half-second"
            placeholder="Enter a username"
            autoComplete="off"
          />
        </div>
        <div className={`${styles.form_set}`}>
          <label for="signupEmail">Email Address</label>
          <input
            name="email"
            id="signupEmail"
            type="email"
            className="register-input half-second"
            placeholder="Enter a email address"
            autoComplete="off"
          />
        </div>
      </div>
      <div className={`${styles.password_sets}`}>
        <div className={`${styles.form_set}`}>
          <label for="signupPassword">Password</label>
          <input
            name="password"
            id="signupPassword"
            type="password"
            className="register-input half-second"
            placeholder="Enter a password"
            autoComplete="off"
          />
        </div>
        <div className={`${styles.form_set}`}>
          <label for="signupPasswordConfirm">Confirm Password</label>
          <input
            type="password"
            id="signupPasswordConfirm"
            className="register-input half-second"
            placeholder="Enter your password again"
            autoComplete="off"
          />
        </div>
      </div>

      <div className={`${styles.form_btns}`}>
        <button type={"submit"} className={`${styles.submit} half-second`}>
          <span>Create</span>
        </button>
        <button type={"reset"} className={`${styles.reset} half-second`}>
          <span>Reset</span>
        </button>
      </div>
    </form>
  );
};

const LoginForm = () => {
  return (
    <form
      noValidate
      id="loginForm"
      className={`${styles.form} ${styles.login_form}`}
      method="POST"
      onSubmit={(e) => {
        let passed = CheckLoginFormInputs();

        if (!passed) {
          e.preventDefault();
        }

        if (passed) {
          for (let i = 0; i < CART_ITEMS.length; i++) {
            RemoveStorageVariable("local", CART_ITEMS[i].productName);
            RemoveStorageVariable(
              "local",
              CART_ITEMS[i].productName + " quantity"
            );
          }

          for (let j = 0; j < FAVORITE_ITEMS.length; j++) {
            RemoveStorageVariable(
              "local",
              "Favorited: " + FAVORITE_ITEMS[j].productName
            );
          }

          // Encrypting values for later use
          const ENCRYPTED_EMAIL = CryptoAES.encrypt(
            document.getElementById("loginEmail").value,
            "secret key 123"
          );
          const ENCRYPTED_PASSWORD = CryptoAES.encrypt(
            document.getElementById("loginPassword").value,
            "secret key 123"
          );

          RemoveStorageVariable("local", "Logged In");
          RemoveStorageVariable("local", "Username");
          RemoveStorageVariable("local", "E_Email");
          RemoveStorageVariable("local", "E_Password");
          RemoveStorageVariable("session", "GUEST MODE"); // Exits user out of guest mode

          DeclareStorageVariable("local", "Logged In", true); // This marks that the user is logged in
          DeclareStorageVariable("local", "E_Email", ENCRYPTED_EMAIL);
          DeclareStorageVariable("local", "E_Password", ENCRYPTED_PASSWORD);

          e.currentTarget.action = "/api/loginUser";
        }
      }}
    >
      <div className={`${styles.form_sets_holder}`}>
        <div className={`${styles.form_set}`}>
          <label for="loginUsername">Username</label>
          <input
            type="text"
            id="loginUsername"
            name="username"
            className="login-input half-second"
            placeholder="Enter your username"
            autoComplete="off"
          />
        </div>
        <div className={`${styles.password_sets}`}>
          <div className={`${styles.form_set}`}>
            <label for="loginEmail">Email</label>
            <input
              type="email"
              id="loginEmail"
              name="email"
              className="login-input half-second"
              placeholder="Enter this account's email"
              autoComplete="off"
            />
          </div>
          <div className={`${styles.form_set}`}>
            <label for="loginPassword">Password</label>
            <input
              type="password"
              id="loginPassword"
              name="password"
              className="login-input half-second"
              placeholder="Enter your password"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.form_btns}`}>
        <button type={"submit"} className={`${styles.submit} half-second`}>
          <span>Sign In</span>
        </button>
        <button type={"reset"} className={`${styles.reset} half-second`}>
          <span>Reset</span>
        </button>
      </div>
    </form>
  );
};

export const LoginSignupForms = () => {
  const router = useRouter();

  let indexRouted = false;

  return (
    <div id="loginSignupForms" className={`${styles.login_signup_forms}`}>
      <div className={`${styles.login_signup_forms_inner}`}>
        <div className={`${styles.login_signup_forms_inner_top}`}>
          <div className={`${styles.logo}`}>
            <span className="half-second">Animex</span>
          </div>

          <div
            className={`${styles.index_link} half-second`}
            onClick={() => {
              TriggerExitAnimations();

              setTimeout(() => {
                ExitAndRoute(router, "/", indexRouted);
              }, 200);
            }}
          >
            <FaHome className={`${styles.icon} half-second`} />
          </div>
        </div>

        <span id="signupHint" className={`${styles.signup_hint} half-second`}>
          Signup Error: &nbsp;
          <span>That username or email is already being used.</span>
        </span>
        <span id="loginHint" className={`${styles.login_hint} half-second`}>
          Login Error: &nbsp;
          <span>
            Your login input(s) were invalid or this account does not exist.
          </span>
        </span>

        <div className={`${styles.forms_box}`}>
          <div className={`${styles.form_holder}`}>
            <h2 className="half-second">Register/Signup</h2>

            <SignupForm />
          </div>
          <div className={`${styles.form_holder}`}>
            <h2 className="half-second">Login</h2>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
