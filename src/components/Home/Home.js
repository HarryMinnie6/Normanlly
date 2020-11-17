import React, { Fragment } from "react";
import { motion } from "framer-motion";

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
      {/* <Navbar /> */}
      home
    </motion.div>
  );
}

export default Home;
