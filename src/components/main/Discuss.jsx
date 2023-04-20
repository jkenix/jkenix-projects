import React from "react";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";

import Form from "../Form.jsx";
import mail_form from "../../img/mail-form.webp";

export default function Discuss(props) {
  return (
    <>
      <section className="l-feni-discuss-project" id="discuss">
        <div className="l-fdp-content l-feni-section l-fm">
          <motion.div
            className="l-fdp-content-info"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <h2 className="fdp-title section-title">Обсудить проект</h2>
            <p className="fdp-desc section-desc">
              Крутые проекты начинаются с заполнения этой формы
            </p>
            <LazyLoad height={366} offset={100} className="rel form-img-block">
              <img
                src={mail_form}
                className="form-img"
                alt="Mail form"
                width={533}
              />
            </LazyLoad>
          </motion.div>
          <Form
            class="l-fdp-content-form l-feni-form"
            initial={{ y: 100, opacity: 0 }}
            form_link_service="https://formspree.io/f/mgebyljo"
          />
        </div>
      </section>
    </>
  );
}
