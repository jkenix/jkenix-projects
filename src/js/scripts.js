// Variables
let body = document.querySelector("body");
let header = document.querySelector("l-header");
let preloader = document.querySelector(".l-preloader");
// Preloader
function preloaderRemove() {
  preloader.remove("l-preloader");
}
window.addEventListener("load", (event) => {
  preloaderRemove();
  body.classList.remove("overflow-hidden");
});
// Show/Remove scroll
window.addEventListener(
  "scroll",
  function (Scroll) {
    if (window.scrollY > 100) {
      header.classList.add("header-scroll");
    } else if (window.scrollY < 100) {
      header.classList.remove("header-scroll");
    }
  },
  true
);