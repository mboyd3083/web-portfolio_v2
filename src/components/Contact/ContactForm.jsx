import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ formData, setSent, sent }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5q054uf",
        "template_2nxlvje",
        form.current,
        "pSvYu-jG8-q7cp3Fq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setSent(!sent);
  };

  const {
    textArea: { tag, name, cols, rows, placeHolder },
    inputInfo,
    submitButton,
  } = formData;
  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form">
      {inputInfo.map((data) => {
        const { tag, name, type, placeHolder } = data;
        return (
          <div className="contact__form-div" key={name}>
            <label className="contact__form-tag">{tag}</label>
            <input
              type={type}
              name={name}
              className="contact__form-input"
              placeholder={placeHolder}
            />
          </div>
        );
      })}

      <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">{tag}</label>
        <textarea
          name={name}
          cols={cols}
          rows={rows}
          className="contact__form-input"
          placeholder={placeHolder}
        ></textarea>
      </div>

      <button className="home__button button button--flex">
        {submitButton.buttonText}
      </button>
    </form>
  );
};

export default ContactForm;
