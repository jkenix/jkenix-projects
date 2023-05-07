import React from "react"; // Подключение модулей React
import { NavLink, Link } from "react-router-dom"; // Подключение модулей React
// Импорт изображений
import logo from "../../img/feni-logo.svg";
// Вызов функции активации меню 
function NavActive() {
  let ham = document.querySelector(".hamburger");
  let body = document.querySelector("body");
  let header = document.querySelector(".l-header");
  let headermenu = document.querySelector(".header-menu");

  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  header.classList.toggle("head-is-switch");
  headermenu.classList.toggle("nav-is-active");

  headermenu.addEventListener("click", function () {
    var currentTarget = event.target;
    // If click A elem - close menu
    if (currentTarget.tagName === "A") {
      NavActive();
    }
  });
}
// Компонент верхней части страницы
export default function Header() {
  return (
    <>
      <header className="l-header">
        <div className="l-header-wr">
          <Link className="logo" to="/">
            <img
              src={logo}
              alt="Feni logo"
              width="65"
              height="65"
              loading="eager"
            />
          </Link>
          <nav className="header-menu">
            <NavLink className="nav-item" to="/portfolio/all_works/">
              Портфолио
            </NavLink>
            <NavLink className="nav-item" to="/services/">
              Наши услуги
            </NavLink>
            <NavLink className="nav-item" to="/about/">
              Мы
            </NavLink>
            <NavLink className="nav-item" to="/contacts/">
              Контакты
            </NavLink>
          </nav>
          <div className="disc-head">
            <a
              href="tel:+7-963-728-66-90"
              className="feni-tel"
              title="Позвонить">
              +7-963-728-66-90
            </a>
            <a href="#discuss" className="btn-head btn-link btn-b41 ">
              Обсудить проект
            </a>
          </div>
          <div
            className="hamburger"
            onClick={() => {
              NavActive();
            }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
