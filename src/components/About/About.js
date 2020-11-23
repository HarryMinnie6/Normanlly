import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../Footer/Footer";

function About() {
  return (
    <>
      <div className="about-page" id="about">
        {/* styles are in styles.css file */}
        {/* <div className="social-media__wrapper">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div> */}
        {/* <Link to="/" className="next-page__left">
          <i class="fas fa-chevron-left"></i>
        </Link>
        <Link to="/projects" className="next-page__right">
          <i class="fas fa-chevron-right"></i>
        </Link> */}
        <div className="about-page__wrapper">
          <div className="description__wrapper">
            I'm a freelance web developer / designer based in Cape Town, South
            Africa, I am available anywhere at the push of a button. I have a
            passion for web design and love to create for web and mobile
            devices. I offer a personalised service tailored to your individual
            needs and budget.
          </div>
          <div className="type-of-work__wrapper">
            <div className="web-design__wrapper">
              <h1 className="web-design__header">Check out what we offer</h1>
              <div className="web-design__description">
                <div className="web-design__service">
                  <h3>Custom design</h3>
                  <p>
                    We will organise a consultation to get an understanding of
                    your business, brand and target audience. Our designs are
                    carefully thought out and matches to your requirements.
                  </p>
                </div>
                {/* <div className="line"></div> */}
                <div className="web-design__service">
                  <h3>single page/ multipage sites</h3>
                  <p>
                    If you are simply looking for a web presence or a
                    comprehensive website that works for you. Contact us!
                  </p>
                </div>
                {/* <div className="line"></div> */}
                <div className="web-design__service">
                  <h3>Fully responsive</h3>
                  <p>
                    You want a website that is engaging and easy to use. All our
                    sites are mobile friendly, letting your website's visitors
                    get the best experience possible on any device.
                  </p>
                </div>
                {/* <div className="line"></div> */}
                <div className="web-design__service">
                  <h3>Modern design</h3>
                  <p>
                    We use but simple but effective design skills that are
                    constantly evolving as we keep up with the latest design
                    trends.
                  </p>
                </div>
                {/* <div className="line"></div> */}
                <div className="web-design__service">
                  <h3>Excellent user experience</h3>
                  <p>
                    We build our sites to best practices for a great user
                    experience.
                  </p>
                </div>
                {/* <div className="line"></div> */}

                <div className="web-design__service">
                  <h3>Assistance with hosting</h3>
                  <p>
                    We assist you with finding the perfect host for your new
                    site, where it is available for the world to see.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default About;
