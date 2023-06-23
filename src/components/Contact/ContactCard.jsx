import React from "react";

const ContactCard = ({ icon, contactType, info, link, linkText, id }) => {
  return (
    <div className="contact__card" key={id}>
      {icon}
      <h3 className="contact__card-title">{contactType}</h3>
      <span className="contact__card-data">{info}</span>
      <a href={link} className="contact__button">
        {linkText}
        <i className="uil uil-arrow-right  contact__button-icon"></i>
      </a>
    </div>
  );
};

export default ContactCard;
