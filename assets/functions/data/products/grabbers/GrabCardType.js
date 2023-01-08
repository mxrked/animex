/**
 *
 *  This is used to grab a card type in the checkout
 *
 */

export default function GrabCardType(e, radio) {
  if (e.currentTarget.checked) {
    document.querySelectorAll(".card-radio").forEach((r) => {
      r.checked = false;
    });
    document.querySelectorAll(".card-cb").forEach((cb) => {
      cb.checked = false;
    });
    radio.checked = true;

    if (radio.checked) {
      // Enables the card inputs
      document.getElementById("cardInputs").style.pointerEvents = "auto";
      document.getElementById("cardInputs").style.opacity = 1;

      document.getElementById("confirmCheckout").style.pointerEvents = "auto";
      document.getElementById("confirmCheckout").style.opacity = 1;
    }
  } else {
    radio.checked = false;
  }
}
