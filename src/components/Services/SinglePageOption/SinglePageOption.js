import React, { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../NavBar/Navbar";
import "./SinglePageOption.css";
import Landing from "../../Landing/Landing";
import { Link } from "react-router-dom";

function SinglePageOption() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
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
      className='single-option-page'
    >
      <div className='single-option-page__wrapper'>
        <Link
          activeClass='active'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='to-home'
          to='/'
        >
          ggg
        </Link>
      </div>
    </motion.div>
  );
}

export default SinglePageOption;
