// Preloader
const ham = document.querySelector(".hamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header__fluid");
const headermenu = document.querySelector(".header__menu");
const btnDarkMode = document.querySelector("#switch-theme");

function preloaderRemove() {
    let preloader = document.querySelector(".preloader");
    preloader.remove("preloader");
}
window.addEventListener("load", (event) => {
    preloaderRemove();
    body.classList.remove("_overflow-is-hidden");
});

// Show/Remove scroll
window.addEventListener(
    "scroll",
    function (Scroll) {
        if (window.scrollY > 100) {
            header.classList.add("-scroll");
        } else if (window.scrollY < 100) {
            header.classList.remove("-scroll");
        }
    },
    true
);

// Change theme
btnDarkMode.addEventListener("click", (e) => {
    if (btnDarkMode.checked) {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
});

// Func for add and delete classes
function toggleClasses() {
    ham.classList.toggle("active");
    body.classList.toggle("_overflow-is-hidden");
    header.classList.toggle("active");
    headermenu.classList.toggle("active");
    btnDarkMode.classList.toggle("active");
}

// Function to handle hamburger click
ham.addEventListener("click", function (event) {
    toggleClasses();
});

// Function to handle header menu item click
headermenu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        toggleClasses();
    }
});
