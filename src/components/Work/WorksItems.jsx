import React from "react";
const WorksItems = ({ project, sourceTitle, demoTitle }) => {
  const {
    id,
    image,
    title,
    subTitle,
    description,
    technologies,
    githubLink,
    websiteLink,
  } = project;
  return (
    <div className="work__card" key={id}>
      <div className="work__img-container">
        <img src={image} alt="" className="work__img" />
      </div>
      <div className="work__info-container">
        <h1 className="work__title">{title}</h1>
        <h2 className="work__subtitle">{subTitle}</h2>
        <p className="work__description">{description}</p>

        <div className="work__technologies-container">
          <h2 className="work__technologies-title">Technologies:</h2>
          {technologies.map((technology, index) => {
            return (
              <span key={index} className="work__tech-items">
                {technology}
              </span>
            );
          })}
        </div>
      </div>

      <div className="work__button-container">
        <a href={websiteLink} className="work__button button button--flex">
          {demoTitle}
        </a>
        <a href={githubLink} className="work__button button button--flex">
          {sourceTitle}
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
