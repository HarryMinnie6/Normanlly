import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  // for bottom line to disappear on scroll
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY > 10);
    });
  }, []);

  return (
    <div className="home-page" id="/">
      {/* <div className="social-media__wrapper">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div> */}
      <div
       
        className={scrollUp ? "bottom-line2" : "bottom-line"}
      ></div>
      <Link
        className={scrollUp ? "next-page__right2" : "next-page__right"}
        to="projects"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <i className="fas fa-chevron-down"></i>
      </Link>
      <div className="home-page__wrapper">
        <div className="header-1__wrapper" >
          <h1 data-aos="zoom-in" data-aos-delay="1000">Concept</h1>
          <div className="color-div1" data-aos="zoom-in" data-aos-delay="1000"></div>
          <div className="color-div2" data-aos="zoom-in" data-aos-delay="1000"></div>
        </div>
        <div className="header-2__wrapper ">
          <h1 data-aos="zoom-in" data-aos-delay="1100">Web design</h1>
          <div data-aos="zoom-in" data-aos-delay="1100" className="color-div3"></div>
          <div data-aos="zoom-in" data-aos-delay="1100" className="color-div4"></div>
        </div>

        <p className="paragraph-1" data-aos="flip-up" data-aos-delay="1100" data-aos-duration="1000">
          Creating beautifully designed, user-friendly websites that reflect
          your brand{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
