import React from "react";
import { aboutPageData } from "../../Data/Data";
const Info = () => {
  return (
    <div className="about__info grid">
      {aboutPageData.hobbies.map((hobby, index) => {
        const { icon, title } = hobby;
        return (
          <div className="about__box" key={index}>
            {icon}
            <h3 className="about__title">{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
