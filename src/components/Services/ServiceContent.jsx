import React from "react";

const ServiceContent = ({ title, icon }) => {
  return (
    <div className="services__content">
      <div>
        {icon}
        <h3 className="services__title">{title}</h3>
      </div>

      <span className="services__button">
        View More <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
    </div>
  );
};

export default ServiceContent;
