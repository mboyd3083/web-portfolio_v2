import React from "react";
import { homePageData } from "../../Data/Data";
const HomeData = () => {
  const { name, description, about, buttonText } = homePageData;
  return (
    <div className="home__data">
      <h1 className="home__title">{name}</h1>
      <h3 className="home__subtitle">{description}</h3>
      <p className="home__description">{about}</p>
      <a href="#contact" className="home__button button button--flex">
        {buttonText}
      </a>
    </div>
  );
};

export default HomeData;
