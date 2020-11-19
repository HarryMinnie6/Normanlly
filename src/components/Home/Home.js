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
      <div className="logo__wrapper"></div>
      <Link to="/about" className="next-page__right">
        <i className="fas fa-chevron-right"></i>
      </Link>
      <div className="home-page__wrapper">
        <h1 className="header-1">Concept</h1>
        <h1 className="header-2">Web Design</h1>

        <p className="paragraph-1">
          Creating beautifully designed, user-friendly websites that reflect
          your brand{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
