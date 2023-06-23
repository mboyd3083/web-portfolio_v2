import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else header.classList.remove("scroll-header");
});

const Header = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

export default Header;
