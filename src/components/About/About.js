import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100vw",
    },
  };
  const pageTransitions = {
    transition: "linear",
    // type: "tween",
    // ease: "anticipate",
    duration: 0.8,
  };
  return (
    <motion.div
      className='about-page '
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransitions}
    >
      About page
      {/* styles are in styles.css file */}
      <div className='social-media__wrapper'>
        <i className='fab fa-instagram'></i>
        <i className='fab fa-linkedin-in'></i>
      </div>
      <Link to='/' className='next-page__left'>
        <i class='fas fa-chevron-left'></i>
      </Link>
      <Link to='/projects' className='next-page__right'>
        <i class='fas fa-chevron-right'></i>
      </Link>
      <div className='about-page__wrapper'>
        <div className='description__wrapper'>
          I'm a freelance web developer / designer based in Cape Town, South
          Africa, but i am available at the push of a button. I have a passion
          for web design and love to create for web and mobile devices. My focus
          is on small to medium sized businesses that are looking for an online
          presence. <br></br>
        </div>
        <div className='type-of-work__wrapper'>
          <div className='web-design__wrapper'>
            <h1 className='web-design__header'>Web design</h1>
            <div className='web-design__description'>
            <h3>Creating a blueprint</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className='web-development__wrapper'>
            <h1 className='web-development__header'>Web development</h1>
            <div className='web-development__description'>
              <h3>Focusing on Responsive design</h3>
              You want a website that is engaging and easy to use.
              <h3>Development process</h3>
              we will gve you an estimated time of completion and keep you updated every step of the way.
              <h3>Development process</h3>
              we will gve you an estimated time of completion and keep you updated every step of the way.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
