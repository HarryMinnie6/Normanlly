import React, { Fragment } from "react";
import "./Services.css";

function Services() {
  return (
    <Fragment>
      <div className='services-page' id='about'>
        <div className='services-page__wrapper'>
          <div className='type-of-work__wrapper'>
            <div className='web-design__wrapper'>
              <h1 className='web-design__header'>Check out what we offer</h1>
              <div className='web-design__description'>
                <div className='web-design__service'>
                  <h3>Custom design</h3>
                  <p>
                    We will organise a consultation to get an understanding of
                    your business, brand and target audience. Our designs are
                    carefully thought out and matches to your requirements.
                    ecommerce etc
                  </p>
                </div>
                {/* <div className="line"></div> */}
                <div className='web-design__service'>
                  <h3> </h3>
                  <p>
                    
                  </p>
                  <a href=''>find out more</a>
                </div>
                {/* <div className="line"></div> */}
                <div className='web-design__service'>
                  <h3>Fully responsive</h3>
                  <p>
                    You want a website that is engaging and easy to use. All our
                    sites are mobile friendly, letting your website's visitors
                    get the best experience possible on any device.
                  </p>
                </div>
                {/* <div className="line"></div> */}
                <div className='web-design__service'>
                  <h3>Modern design</h3>
                  <p>
                    We use but simple but effective design skills that are
                    constantly evolving as we keep up with the latest design
                    trends.
                  </p>
                </div>
                {/* <div className="line"></div> */}
                <div className='web-design__service'>
                  <h3>Excellent user experience</h3>
                  <p>
                    We build our sites to best practices for a great user
                    experience.
                  </p>
                </div>
                {/* <div className="line"></div> */}

                <div className='web-design__service'>
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
    </Fragment>
  );
}

export default Services;
