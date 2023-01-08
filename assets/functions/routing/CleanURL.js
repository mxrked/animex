/**
 *
 *  This is used to clean the url
 *
 */

export default function CleanURL(rooter, title) {
  window.history.pushState("Clean URL", title, rooter.pathname); // Cleans the URL
}
