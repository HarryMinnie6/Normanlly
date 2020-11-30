import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Navbar from "../NavBar/Navbar";

function Landing() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      // scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      // scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      // scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const pageStyle = {
    position: "absolute",
  };
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Landing;
