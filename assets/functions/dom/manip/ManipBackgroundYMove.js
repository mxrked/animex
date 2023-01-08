/**
 *
 *  This is used to move a backgrounds Y on mousemove
 *
 */

export default function ManipBackgroundYMove(target, calculatedY) {
  target.style.transform =
    "translateY(-" + calculatedY.toString() + "%) scale(1.15)";
}
