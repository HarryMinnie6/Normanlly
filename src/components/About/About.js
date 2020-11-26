import React, { Fragment } from "react";
import "./About.css";

function About() {
  return (
    <Fragment>
      <div className='about-page' id='about'>
        <div className='about-page__wrapper'>
          <div className='description__wrapper'>
            <div className='description__wrapper-1'>
              <p>
                We love working with small businesses and brands to build a web
                presence.
              </p>
            </div>
            <div className='description__wrapper-2'>
              <p>
                Concept web design was initially born for the love of creating
                for the web. We have always cared for geat visual design and
                amazing user experience. Whether you are simply looking for a
                web presence or a comprehensive site, Concept Web design
                offers a personalised service tailored to your individual needs
                and budget. We are available anywhere, anytime at the push of a
                button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
