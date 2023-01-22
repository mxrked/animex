// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //! Session/Local Storage Clearing
  useEffect(() => {
    if (localStorage.getItem("ally-supports-cache")) {
      localStorage.removeItem("ally-supports-cache");
    }

    if (sessionStorage.getItem("Search Opened")) {
      sessionStorage.removeItem("Search Opened");
    }

    if (sessionStorage.getItem("Mobile Nav Opened")) {
      sessionStorage.removeItem("Mobile Nav Opened");
    }
  }, [router]);

  //! NProgress Init
  useEffect(() => {
    // NProgress.done(); // Prevents NProgress from being stuck after page route completed

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, [router, router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
