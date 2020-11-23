import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw"
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100vw"
    }
  };
  const pageTransitions = {
    transition: "linear",
    // type: "tween",
    // ease: "anticipate",
    duration: 0.8
  };
  return (
    <motion.div
      className="home-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <div className="social-media__wrapper">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
      <div className="bottom-line"></div>
      <Link to="/about" className="next-page__right">
        <i className="fas fa-chevron-right"></i>
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
    </motion.div>
  );
}

export default Home;
