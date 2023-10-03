// Variables
let body = document.querySelector("body");
let preloader = document.querySelector(".preloader");
// Preloader
function preloaderRemove() {
  preloader.remove("preloader");
}
window.addEventListener("load", (event) => {
  preloaderRemove();
});
// Функция вызова всплывающего окна
// после нажатия на "Заказать" в карточке услуги
function Show_Order_Form() {
  // Выбор тега body (тела всего документа "index.html")
  let body = document.querySelector("body");
  // Выбор обертки карточки услуги, класса l-of-wrapper
  let fof = document.querySelector(".l-of-wrapper");
  // Выбор гамбургер-меню из Header.
  // Его нужно скрывать, чтобы избежать
  // случайного появления при перевороте экрана
  let ham = document.querySelector(".hamburger");
  // Добавление и удаление классов при нажатии кнопки
  body.classList.toggle("overflow-is-hidden");
  fof.classList.toggle("of-is-visible");
  ham.classList.toggle("ham-is-hide");
}
