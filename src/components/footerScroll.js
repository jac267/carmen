var lastScrollTop = 0;

document.addEventListener("wheel", function (event) {
  footer = document.getElementById("footer-bar");
  arrow = document.getElementById("arrow-footer");
  if (event.deltaY < 0) {
    //scroll par en haut
    footer.classList.add("footer-bar-hidden");
    footer.classList.remove("footer-bar-showned");

    arrow.classList.add("arrow-showned");
    arrow.classList.remove("arrow-hidden");
  } else if (event.deltaY > 0) {
    //scroll par en bas
    footer.classList.add("footer-bar-showned");
    footer.classList.remove("footer-bar-hidden");

    arrow.classList.add("arrow-hidden");
    arrow.classList.remove("arrow-showned");
  }
});
