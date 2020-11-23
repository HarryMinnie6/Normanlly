import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page" id="projects">
      {/* <div className="social-media__wrapper">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div> */}

      {/* <Link to="/about" className="next-page__left">
        <i class="fas fa-chevron-left"></i>
      </Link>
      <Link to="/contact" className="next-page__right">
        <i class="fas fa-chevron-right"></i>
      </Link> */}
      <div className="project-page__wrapper">
        <div className="project-holder">
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
          <div className="project">project</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
