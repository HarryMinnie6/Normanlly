import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <Fragment>
      <div className="services-page" id="about">
        <div className="services-page__wrapper">
          <h2 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-once="true"> What I do</h2>
          <div className="services__wrapper">
            <div className="service" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
              <div className="service-line"></div>
              <h2>Custom design</h2>
              <p>
                We can design your project from scratch or improve on an
                existing design. Our designs are carefully thought out and
                matches to your requirements.
                <br></br>
                <br></br>
                <i>
                  “There are three responses to a piece of design – yes, no, and
                  WOW! - Milton Glaser
                </i>
              </p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
              <div className="service-line"></div>
              <h2>Fully responsive design</h2>
              <p>
                Mobile devices accounts for approximately half of web traffic
                worldwide. All our sites are mobile friendly, allowing visitors
                to your site from any device. We also focus on Search Engine
                Optimization. What use is a good site without any visitors?
              </p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              <div className="service-line"></div>
              <h2>User-Friendly experiences</h2>
              <p>
                We create sites that are engaging and easy to use. We use simple
                but effective design skills that are constantly evolving as we
                keep up with the latest design trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Services;
