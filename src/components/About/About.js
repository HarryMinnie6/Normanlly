import React, { Fragment } from "react";
import "./About.css";

function About() {
  return (
    <Fragment>
      <div className='about-page' id='about'>
        <div className='about-page__wrapper'>
          <div className='description__wrapper'>
            <div className='description__wrapper-1' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1300" data-aos-once="true">
              <p>
                We love working with small businesses and brands to build a web
                presence.
              </p>
            </div>
            <div className='description__wrapper-2' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1300" data-aos-once="true">
              <p>
                Concept web design was initially born for the love of creating
                for the web. We have always cared for geat visual design and
                amazing user experience. Whether you are simply looking for a
                web presence or a comprehensive site, Concept Web design helps
                start-ups and established businesses to launch their new or
                revamped websites. We are available anywhere, anytime at the
                push of a button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
