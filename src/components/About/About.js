import React, { Fragment } from "react";
import "./About.css";

function About() {
  return (
    <Fragment>
      <section className="about-section" id="about">
        <h2 className="h2-about">About Normanlly</h2>

        <div>
          <p className="p-about">
            Normanlly was initially born for the love of creating for the web.
            I have always cared for great visual design and amazing user
            experience. Whether you are simply looking for a web presence or a
            comprehensive site, Normanlly helps start-ups and established
            businesses to launch their new or revamped websites. We are
            available anywhere, anytime at the click of a button.
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
