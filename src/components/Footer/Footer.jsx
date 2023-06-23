import React from "react";
import "./Footer.css";
import { footerData } from "../../Data/Data";
const Footer = () => {
  const { footerTitle, navLinks, socialLinks, footer } = footerData;
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{footerTitle}</h1>
        <ul className="footer__list">
          {navLinks.map((navLink) => {
            const { link, name } = navLink;
            return (
              <li key={name}>
                <a href={link} className="footer__link">
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="footer__social">
          {socialLinks.map((socialLink, index) => {
            const { link, icon } = socialLink;
            return (
              <a key={index} href={link} className="footer__social-link">
                {icon}
              </a>
            );
          })}
        </div>

        <span className="footer__copy">&#169; {footer}</span>
      </div>
    </footer>
  );
};

export default Footer;
