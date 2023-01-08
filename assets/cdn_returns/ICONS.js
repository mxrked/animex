/**
 *
 *  This will hold all the icon cdns for the website
 *
 */

import DeclareIcon from "../functions/cdn_declares/DECLARE_ICON";

const ATI = DeclareIcon("icons", "tab-icons", "apple-touch-icon", "png");
const FAVICON = DeclareIcon("icons", "tab-icons", "favicon", "ico");
const F16 = DeclareIcon("icons", "tab-icons", "favicon-16x16", "png");
const F32 = DeclareIcon("icons", "tab-icons", "favicon-32x32", "png");

const VISA = DeclareIcon("icons", "checkout", "visa", "webp");
const MASTER_CARD = DeclareIcon("icons", "checkout", "master-card", "webp");
const DISCOVER = DeclareIcon("icons", "checkout", "discover", "webp");
const AMERICAN_EXPRESS = DeclareIcon(
  "icons",
  "checkout",
  "american-express",
  "webp"
);

export {
  ATI,
  FAVICON,
  F16,
  F32,
  VISA,
  MASTER_CARD,
  DISCOVER,
  AMERICAN_EXPRESS,
};
