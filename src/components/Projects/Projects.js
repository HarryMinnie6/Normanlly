import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className='projects-page' id='projects'>
      <div className='project-page__wrapper'>
        <h2>What we've worked on</h2>
        <div className='project-holder'>
          <div className='project'>
          <div className='project-image'><img src='' alt='' /></div>
            
            <div className='project-description'>
            <p>fjr wekj wefweef djsfsdlfkjwe wefjwefwef wefljsdfnwef wewefjwe wejuwjdfnwefwe wefjnwef</p></div>
          </div>
          <div className='project'>project</div>
          <div className='project'>project</div>
          <div className='project'>project</div>
          <div className='project'>project</div>
          <div className='project'>project</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
