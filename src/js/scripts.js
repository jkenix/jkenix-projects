// Preloader
const body = document.querySelector("body");
const header = document.querySelector(".header__wrap");
const btnDarkMode = document.querySelector("#switch-theme");

function preloaderRemove() {
    let preloader = document.querySelector(".preloader");
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
        let header__fluid = document.querySelector(".header__fluid");

        if (window.scrollY > 100) {
            header__fluid.classList.add("header__scroll");
        } else if (window.scrollY < 100) {
            header__fluid.classList.remove("header__scroll");
        }
    },
    true
);
//
btnDarkMode.addEventListener("click", (e) => {
    if (btnDarkMode.checked) {
		body.classList.add("dark-theme");
	} else {
		body.classList.remove("dark-theme");
	}
});

// Функция для добавления и удаления классов
function toggleClasses() {
    let ham = document.querySelector(".hamburger");
    let headermenu = document.querySelector(".header__menu");
    ham.classList.toggle("active");
    body.classList.toggle("_overflow-is-hidden");
    header.classList.toggle("active");
    headermenu.classList.toggle("active");
}

// Функция для обработки нажатия на гамбургер
document
    .querySelector(".hamburger")
    .addEventListener("click", function (event) {
        toggleClasses();
    });

// Функция для обработки нажатия на элемент меню header
document
    .querySelector(".header__menu")
    .addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            toggleClasses();
        }
    });
