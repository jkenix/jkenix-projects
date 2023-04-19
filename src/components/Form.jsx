import React from "react";
import { motion } from "framer-motion";

export default function Form(props) {
  return (
    <>
      <motion.form
      
        action={props.form_link_service}
        method="POST"
        className={props.class}
        initial={props.initial}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        {props.title}
        <div className="l-feedback-row top">
          <label className="label-feedback" htmlFor="Client-name">
            Ваше имя*
          </label>
          <input
            type="text"
            id="Client-name"
            name="Client-name"
            maxLength="255"
            className="form-input"
            aria-required="true"
            placeholder="Введите имя"
            required={true}
          />
        </div>
        <div className="l-feedback-row right">
          <label className="label-feedback" htmlFor="Client-phone">
            Телефон*
          </label>
          <input
            type="tel"
            id="Client-phone"
            name="Client-phone"
            maxLength="50"
            minLength="6"
            className="form-input"
            aria-required="true"
            placeholder="Введите номер телефона"
            required={true}
          />
        </div>
        <div className="l-feedback-row left">
          <label className="label-feedback" htmlFor="Client-email">
            Почта*
          </label>
          <input
            type="email"
            id="Client-email"
            name="Client-email"
            maxLength="255"
            minLength="3"
            className="form-input"
            aria-required="true"
            placeholder="Введите электронный адрес"
            required={true}
          />
        </div>
        <div className="l-feedback-row message">
          <label htmlFor="Client-message" className="label-feedback">
            Сообщение
          </label>
          <textarea
            id="Client-message"
            name="Client-message"
            maxLength="700"
            cols="40"
            rows={props.textarea_rows}
            className="form-input message-input"
            placeholder="Введите ваше сообщение"></textarea>
        </div>
        {props.value}
        <input
          type="submit"
          value="Отправить"
          className="feedback-btn l-feni-section"></input>
        <div className="checkbox-row">
          <p className="feni-checkbox-agree">
            Отправляя форму вы даёте согласие на обработку персональных данных
          </p>
        </div>
      </motion.form>
    </>
  );
}
Form.defaultProps = {textarea_rows: "10"};
