/**
 *
 *  This is used to manip certain page links
 *
 */

function DisableLinks(elements) {
  // Grabs all instances of a link class and prevents interactivity
  document.querySelectorAll(elements).forEach((link) => {
    link.style.opacity = 0.5;
    link.style.pointerEvents = "none";
  });
}

function EnableLinks(elements) {
  // Grabs all instances of a link class and enables interactivity
  document.querySelectorAll(elements).forEach((link) => {
    link.style.opacity = 1;
    link.style.pointerEvents = "auto";
  });
}

export default function ManipPageLinks(status, elements) {
  // status == "disable"
  if (status == "disable") {
    DisableLinks(elements);
  }

  // status == "enable"
  if (status == "enable") {
    EnableLinks(elements);
  }
}
