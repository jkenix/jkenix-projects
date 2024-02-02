// Variables
let body = document.querySelector("body");
let header = document.querySelector("header__wrap");
let preloader = document.querySelector(".preloader");
// Preloader
function preloaderRemove() {
    preloader.remove("preloader");
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
            header.classList.add("header__scroll");
        } else if (window.scrollY < 100) {
            header.classList.remove("header__scroll");
        }
    },
    true
);

// Функция для добавления и удаления классов
function toggleClasses() {
    let ham = document.querySelector(".hamburger");
    let body = document.querySelector("body");
    let header = document.querySelector(".header__wrap");
    let headermenu = document.querySelector(".header__menu");
    ham.classList.toggle("active");
    body.classList.toggle("overflow-is-hidden");
    header.classList.toggle("active");
    headermenu.classList.toggle("active");
}

// Функция для обработки нажатия на гамбургер
document.querySelector(".hamburger").addEventListener('click', function(event) {
    toggleClasses();
});

// Функция для обработки нажатия на элемент меню header
document.querySelector(".header__menu").addEventListener('click', function(event) {
  if (event.target.tagName === "A") {
    toggleClasses();
  }
});