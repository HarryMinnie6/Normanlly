import React, { Fragment } from "react";
import "./Services.css";

function Services() {
  return (
    <Fragment>
      <div className='services-page' id='about'>
        <div className='services-page__wrapper'>
          <h2> What we offer</h2>
          <div className='services-display__wrapper'>
            <div className='service__wrapper'>
              <h3> Single page or multipage sites</h3>
              <p>
                Choose one of 3 templates to get your business/ brand off the
                ground, or choose the bits you like the most, from each
                template, to give your site that unique look and feel.
              </p>
              <a href=''>find out more</a>
            </div>
            <div className='service__wrapper'>
              <h3>Custom Design</h3>
              <p>
                Choose one of 3 templates to get your business/ brand off the
                ground, or choose the bits you like the most, from each
                template, to give your site that unique look and feel.
              </p>
              <a href=''>find out more</a>
            </div>
            <div className='service__wrapper'>
              <h3>Assistance with hosting</h3>
              <p>
                Choose one of 3 templates to get your business/ brand off the
                ground, or choose the bits you like the most to give your site
                that unique feel.
              </p>
              <a href=''>find out more</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Services;
