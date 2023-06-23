import React from "react";
import { homePageData } from "../../Data/Data";
const Social = () => {
  const { socialLinks } = homePageData;
  return (
    <div className="home__social">
      {socialLinks.map((socialLink, index) => {
        const { link, icon } = socialLink;
        return (
          <a href={link} className="home__social-icon" key={link}>
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
