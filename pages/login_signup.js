// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLinks from "../assets/functions/dom/manip/ManipPageLinks";
import DeclareStorageVariable from "../assets/functions/data/storages/DeclareStorageVariable";
import RemoveStorageVariable from "../assets/functions/data/storages/RemoveStorageVariable";

// Component Imports
import { HeadCnt } from "../assets/components/global/Misc/HeadCnt";
import { LoginSignupBG } from "../assets/components/pages/Login_Signup/LoginSignupBG";
import { LoginSignupForms } from "../assets/components/pages/Login_Signup/LoginSignupForms";

// Style Imports
import "../assets/styles/modules/User/User.module.css";
import styles from "../assets/styles/modules/User/User.module.css";

export default function LoginSignup() {
  const router = useRouter();

  // Redirect user is on production server
  useEffect(() => {
    // If not on localhost, take user back to home page
    if (sessionStorage.getItem("Enviroment:") !== "localhost") {
      router.push("/");
    }
  }, []);

  // Removing error HASHES after load and removing storage variables
  useEffect(() => {
    if (router.asPath.indexOf("LOGIN_ERROR") > -1) {
      history.pushState("", "", window.location.pathname);
      RemoveStorageVariable("local", "Logged In");
      RemoveStorageVariable("local", "Username");
      RemoveStorageVariable("local", "E_Email");
      RemoveStorageVariable("local", "E_Password");
    }

    if (router.asPath.indexOf("SIGNUP_ERROR") > -1) {
      history.pushState("", "", window.location.pathname);
      RemoveStorageVariable("local", "Logged In");
      RemoveStorageVariable("local", "Username");
      RemoveStorageVariable("local", "E_Email");
      RemoveStorageVariable("local", "E_Password");
    }
  }, []);

  // Redirects user after logging in and prevents user from having an undefined account username
  useEffect(() => {
    if (sessionStorage.getItem("Enviroment:") === "localhost") {
      if (localStorage.getItem("Logged In")) {
        if (
          localStorage.getItem("Username") !== "undefined" &&
          localStorage.getItem("Username")
        ) {
          router.push("/");
        }
      }
    }
  }, []);

  // Removing Reset APIs storage variable
  useEffect(() => {
    if (sessionStorage.getItem("Reset APIs")) {
      RemoveStorageVariable("session", "Reset APIs");
      router.reload();
    }
  }, []);

  // Clearing encrypted data
  useEffect(() => {
    if (router.asPath.indexOf("/login_signup/#SIGNUP_ERROR") > -1) {
      RemoveStorageVariable("local", "E_Email");
      RemoveStorageVariable("local", "E_Password");
    }
    if (router.asPath.indexOf("/login_signup/#LOGIN_ERROR") > -1) {
      RemoveStorageVariable("local", "E_Email");
      RemoveStorageVariable("local", "E_Password");
    }
  }, []);

  // Display Error based on url
  useEffect(() => {
    if (router.asPath.indexOf("#SIGNUP_ERROR") > -1) {
      document.getElementById("signupHint").style.display = "flex";
    }

    if (router.asPath.indexOf("#LOGIN_ERROR") > -1) {
      document.getElementById("loginHint").style.display = "flex";
    }
  }, [router]);

  return (
    <div id="PAGE" className="page half-second overrides_LoginSignup">
      <HeadCnt
        title="ANIMEX - Login/Signup."
        description="Animex is your one stop shop for all things anime and manga related. Our store has a vast range of different products which include figures, manga and clothing items. We current sell items based on the following franchises: Demon Slayer, Jojo's Bizarre Adventure, Vinland Saga, Mob Psycho 100, My Hero Academia, Spy X Family, Jujutsu Kaisen, Attack on Titan, One Punch Man."
        keywords="animex, anime and manga store, anime manga store, ecommerce store, anime figures, anime manga, manga, anime clothing, animex home page, animex index, demon slayer, jojos bizarre adventure, jjba, jojo, mob psycho, mob psycho 100, vinland saga, my hero academia, mha, jujutsu kaisen, jjk, attack on titan, aot, spy x family, sxf, one punch man, opm"
        robots="index, follow"
        url="https://effervescent-churros-110c8b.netlify.app/login_signup/"
      />

      <main id="PAGE_CNT" className="page-main full-second">
        <div className={`${styles.login_signup_box} container-fluid`}>
          <div className={`${styles.login_signup_row} row`}>
            <div
              className={`${styles.login_signup_side} ${styles.login_signup_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <LoginSignupBG />
            </div>
            <div
              className={`${styles.login_signup_side} ${styles.login_signup_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <LoginSignupForms />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
