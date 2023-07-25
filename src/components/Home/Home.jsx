import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./HomeData";
// import profileGraphic from "../../assets/profile-graphic.png";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          {/* <div className="home__img">
           <img src={profileGraphic} alt="" />
          </div> */}
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
