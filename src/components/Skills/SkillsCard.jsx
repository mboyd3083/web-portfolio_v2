import React from "react";

const SkillsCard = ({ name, icon, skills }) => {
  return (
    <div className="skills__content">
      <div className="skills__title-container">
        <div className="skills-title__icon">{icon}</div>

        <h3 className="skills__title">{name}</h3>
      </div>

      <div className="skills__box">
        <div className="skills__group">
          {skills.skillsList.map((skill, index) => (
            <div className="skills__data" key={index}>
              <span className="skills__icon">{skill.icon}</span>
              <div>
                <h3 className="skills__name">{skill.skillName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
