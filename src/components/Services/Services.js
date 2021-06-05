import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <Fragment>
      <div className='services-page' id='about'>
        <div className='services-page__wrapper'>
          <h2> What I Offer</h2>
          <div className='services__wrapper'>
            <div className='services__wrapper_left'>
              <div className='service'>
                <p className='service_header'>Custom Design</p>
                <p className='service_paragraph'>
                  I can design your project from scratch or improve on an
                  existing design. My designs are carefully thought out and
                  matches to your requirements.
                  <br></br>
                  <i>
                    “There are three responses to a piece of design – yes, no,
                    and WOW! - Milton Glaser
                  </i>
                </p>
              </div>
              <div className='service'>
                <p className='service_header'>Fully Responsive Design</p>
                <p className='service_paragraph'>
                  Mobile devices accounts for approximately half of web traffic
                  worldwide. All my sites are mobile friendly, allowing visitors
                  to your site from any device.
                </p>
              </div>
              <div className='service'>
                <p className='service_header'>User-Friendly Experiences</p>
                <p className='service_paragraph'>
                  I create sites that are engaging and easy to use. I use simple
                  but effective design skills that are constantly evolving as I
                  keep up with the latest design trends.
                </p>
              </div>
              <div className='service'>
                <p className='service_header'>Assistance With Hosting</p>
                <p className='service_paragraph'>
                  Not sure where to get a domain name or where to host your
                  website? I have that covered. I will assist you with choosing
                  the perfect domain name and find the best web hosting platform
                  for your site.
                </p>
              </div>
            </div>
            <div className='services__wrapper_right'>
              {/* <img
                src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              /> */}
            </div>
          </div>
        </div>
        <div className='designProcess'>
          <p>The Design Process</p>
          <div className='designProcess_wrapper'>
            <div className='designProcess_processHolder'>
              <div className='process'>
                <p className='process_header'>Project Planning</p>
                <p className='process_paragraph'>
                  The first thing I do with any web design project is to figure
                  out exactly what we want to achieve. What is the purpose of
                  the project and what problem are we trying to solve?
                </p>
              </div>
            </div>
            <div className='designProcess_processHolder'>
              <div className='process2'>
                <p className='process_header'>Research</p>
                <p className='process_paragraph'>
                  Secondly I do research to get some web design inspiration and
                  search for the latest trends. I create a mood board, taking
                  note of the latest design trends, view potential competition
                  and design your project accordingly.
                </p>
              </div>
            </div>
            <div className='designProcess_processHolder'>
              <div className='process'>
                <p className='process_header'>Design</p>
                <p className='process_paragraph'>
                  After gathering all our research and information, I move on to
                  the design process. This will be sent to you for final
                  aproval.
                </p>
              </div>
            </div>
            <div className='designProcess_processHolder'>
              <div className='process2'>
                <p className='process_header'>Development</p>
                <p className='process_paragraph'>
                  Once you are happy with the design, I start to develop. when I
                  am done building your website you give the final approval
                  before it gets published live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Services;
