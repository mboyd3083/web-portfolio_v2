import React from "react";
import "./Work.css";
import Works from "./Works";
import { workPageData } from "../../Data/Data";
const Work = () => {
  const { title, subtitle } = workPageData;
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      <Works />
    </section>
  );
};

export default Work;
