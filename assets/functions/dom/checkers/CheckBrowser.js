/**
 *
 *  This is used to check what browser the user is on
 *
 */

export default function CheckBrowser() {
  let browser = "";

  const CHROME = navigator.userAgent.search("Chrome");
  const FIREFOX = navigator.userAgent.search("Firefox");
  const EDGE = navigator.userAgent.search("Edge");
  const EDG = navigator.userAgent.search("Edg");
  const IE8 = navigator.userAgent.search("MSIE 8.0");
  const IE9 = navigator.userAgent.search("MSIE 9.0");

  if (CHROME > -1) {
    browser = "Chrome";
  }
  if (FIREFOX > -1) {
    browser = "Firefox";
  }
  if (EDG > -1) {
    browser = "Edge";
  }
  if (EDGE > -1) {
    browser = "Edge";
  }
  if (IE8 > -1) {
    browser = "MSIE 8.0";
  }
  if (IE9 > -1) {
    browser = "MSIE 9.0";
  }

  return browser;
}
