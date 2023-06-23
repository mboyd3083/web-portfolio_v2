import React from "react";
import "./Skills.css";
import SkillsCard from "./SkillsCard";
import { skillsPageData } from "../../Data/Data";
const Skills = () => {
  const { frontendSkills, backendSkills, otherSkills } = skillsPageData;
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technologies</span>

      <div className="skills__container container grid">
        <SkillsCard
          name={frontendSkills.name}
          icon={frontendSkills.mainIcon}
          skills={frontendSkills}
        />

        <SkillsCard
          name={backendSkills.name}
          icon={backendSkills.mainIcon}
          skills={backendSkills}
        />
        <SkillsCard
          name={otherSkills.name}
          icon={otherSkills.mainIcon}
          skills={otherSkills}
        />
      </div>
    </section>
  );
};

export default Skills;
