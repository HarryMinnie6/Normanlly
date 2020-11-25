import React, { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Home.css";
import About from "../About/About";

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
        className="bottom-line"
        className={scrollUp ? "bottom-line2" : "bottom-line "}
      ></div>
      <Link
        className="next-page__right"
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
        <div className="header-1__wrapper ">
          <h1>Concept</h1>
          <div className="color-div1"></div>
          <div className="color-div2"></div>
        </div>
        <div className="header-2__wrapper ">
          <h1>Web design</h1>
          <div className="color-div3"></div>
          <div className="color-div4"></div>
        </div>

        <p className="paragraph-1">
          Creating beautifully designed, user-friendly websites that reflect
          your brand{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
