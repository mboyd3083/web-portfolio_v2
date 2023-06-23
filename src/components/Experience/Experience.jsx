import React from "react";
import "./Experience.css";
import { experiencePageData } from "../../Data/Data";

const Experience = () => {
  const { title, subtitle, experienceData, calendarIcon } = experiencePageData;

  return (
    <section className="experience section">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="experience__container container">
        <div className="experience__sections">
          {experienceData.map((experience, index) => {
            const { experienceTitle, experienceSubtitle, timeLine } =
              experience;

            return (
              <div className="experience__data" key={index}>
                {index % 2 !== 0 && (
                  <>
                    <div></div>
                    <div>
                      <span className="experience__rounder"></span>
                      <span className="experience__line"></span>
                    </div>
                  </>
                )}

                <div>
                  <h3 className="experience__title">{experienceTitle}</h3>
                  <span className="experience__subtitle">
                    {experienceSubtitle}
                  </span>
                  <div className="experience__calendar">
                    <span className="calendar-icon"> {calendarIcon}</span>
                    {timeLine}
                  </div>
                </div>
                {index % 2 === 0 && (
                  <>
                    <div>
                      <span className="experience__rounder"></span>
                      <span className="experience__line"></span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
