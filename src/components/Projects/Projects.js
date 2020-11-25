import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page" id="projects">
      <div className="project-page__wrapper">
        <h2>What we've worked on</h2>
        <div className="project-holder">
          <div className="project">
            <div className="project-image">
              <img
                src="https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>

            <div className="project-description">
              <h3>Project 1</h3>
              <p>Custom site for fjfjfjf fjfjfjf</p>
              <a href="" className="site-link">
                View site
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img
                src="https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>

            <div className="project-description">
              <h3>Project 1</h3>
              <p>Custom site for fjfjfjf fjfjfjf</p>
              <a href="" className="site-link">
                View site
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img
                src="https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>

            <div className="project-description">
              <h3>Project 1</h3>
              <p>Custom site for fjfjfjf fjfjfjf</p>
              <a href="" className="site-link">
                View site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
