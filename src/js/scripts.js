// Preloader
const ham = document.querySelector(".hamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header__fluid");
const headermenu = document.querySelector(".header__menu");

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

// Func for add and delete classes
function toggleClasses() {
    ham.classList.toggle("active");
    body.classList.toggle("_overflow-is-hidden");
    header.classList.toggle("active");
    headermenu.classList.toggle("active");
}

// Function to handle hamburger click
ham.addEventListener("click", function (event) {
    toggleClasses();
});

// Function to handle header menu item click
headermenu.addEventListener("click", function (event) {
    if (
        headermenu.classList.contains("active") &&
        event.target.tagName === "A"
    ) {
        toggleClasses();
    }
});
