/**
 *
 *  This is all the framer motion animations that I have created
 *
 */

const FADE_IN = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const FADE_UP = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 200 },
};
const FADE_DOWN = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -200 },
};
const FADE_LEFT = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 200 },
};
const FADE_RIGHT = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -200 },
};

export { FADE_IN, FADE_UP, FADE_DOWN, FADE_LEFT, FADE_RIGHT };
