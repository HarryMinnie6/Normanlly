import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page" id="projects">
      <div className="project-page__wrapper">
        <h2 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-aos-anchor-placement="top-bottom" data-aos-once="true">What we've worked on</h2>
        <div className="project-holder">
          <div className="project" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
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
          <div className="project" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
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
          <div className="project" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
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
