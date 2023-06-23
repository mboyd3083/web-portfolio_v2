import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { workPageData } from "../../Data/Data";
import WorksItems from "./WorksItems";
const Works = () => {
  const { projectsData, projectsNav, sourceTitle, demoTitle } = workPageData;
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
    // eslint-disable-next-line
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="works__container">
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${index === active ? "active-work" : " "} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <WorksItems
                project={project}
                sourceTitle={sourceTitle}
                demoTitle={demoTitle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
