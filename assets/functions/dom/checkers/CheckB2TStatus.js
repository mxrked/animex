/**
 *
 *  This is used to check the status of the B2T
 *
 */

export default function CheckB2TStatus() {
  const B2T = document.getElementById("pageB2T");

  if (window.scrollY > 650) {
    B2T.style.bottom = "15px"; // Show
  }

  if (window.scrollY < 150) {
    B2T.style.bottom = "-200px"; // Hide
  }
}
