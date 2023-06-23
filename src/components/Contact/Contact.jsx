import React from "react";
import { useState } from "react";
import "./Contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactSubmit from "./ContactSubmit";
import { contactPageData } from "../../Data/Data";
const Contact = () => {
  const [sent, setSent] = useState(false);
  const {
    title,
    subTitle,
    contactCardData,
    contactCardTitle,
    contactTitle,
    contactFormData,
    contactSubmitData,
  } = contactPageData;

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subTitle}</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{contactCardTitle}</h3>
          <div className="contact__info">
            {contactCardData.map((contact) => {
              const { icon, contactType, info, link, linkText } = contact;
              return (
                <div key={contactType}>
                  <ContactCard
                    id={contactType}
                    icon={icon}
                    contactType={contactType}
                    info={info}
                    link={link}
                    linkText={linkText}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{contactTitle}</h3>
          {sent ? (
            <ContactSubmit submitData={contactSubmitData} />
          ) : (
            <ContactForm
              formData={contactFormData}
              setSent={setSent}
              sent={sent}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
