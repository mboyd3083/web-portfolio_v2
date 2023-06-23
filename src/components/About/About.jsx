import React from "react";
import "./About.css";
import Info from "./Info";
import { aboutPageData } from "../../Data/Data";

const About = () => {
  const { title, subtitle, buttonText, aboutDescription, mainImg,resume } =
    aboutPageData;
  return (
    <section className="about section" id="about">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      <div className="about__container container grid">
        <img src={mainImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description"> {aboutDescription.p1}</p>
          <p className="about__description"> {aboutDescription.p2}</p>
          <div className="about__button">
            <a
              download=""
              href={resume}
              className="about__resume button button--flex"
            >
              {" "}
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
