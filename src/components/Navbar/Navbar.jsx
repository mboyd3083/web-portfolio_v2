import "./Navbar.css";
import { useState } from "react";
import { navbarData } from "../../Data/Data";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const { navLogo, navLinks, toggleIcon, socialLinks } = navbarData;

  return (
    <nav className="nav container">
      <a href="index.html" className="nav__logo">
        {navLogo}
      </a>

      <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
        <ul className="nav__list grid">
          {navLinks.map((navLink) => {
            const { link, linkTitle, icon } = navLink;
            return (
              <li className="nav__item" key={linkTitle}>
                <a
                  href={link}
                  className={
                    activeNav === { link }
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  onClick={() => {
                    setActiveNav({ link });
                    setToggle(!toggle);
                  }}
                >
                  {icon}
                  <span className="link__title">{linkTitle}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <i
          className="uil uil-times nav__close"
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
      <div className="nav__social">
        <ul className="nav__social-list">
          {socialLinks.map((socialLink) => {
            const { link, icon } = socialLink;
            return (
              <li className="nav__social-item" key={link}>
                <a href={link} className="nav__social-icon">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
        {toggleIcon}
      </div>
    </nav>
  );
};

export default Navbar;
