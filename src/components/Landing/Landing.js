import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
