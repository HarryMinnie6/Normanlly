import React, { Fragment } from "react";
import "./About.css";

function About() {
  return (
    <Fragment>
      <section className='about-section' id='about'>
        <h2 className='h2-about'>About Me</h2>

        <div>
          <p className='p-about' data-aos='fade-down'>
            I'm a self-taught web developer / designer based in Cape Town, South
            Africa. I have a passion for web design and love to create for web
            and mobile devices. I'm quietly confident, naturally curious, and
            perpetually working on improving my knowledge one design problem at
            a time.
          </p>
        </div>
        <hr />
      </section>
    </Fragment>
  );
}

export default About;
