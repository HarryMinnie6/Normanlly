import React from "react";
import "./Projects.css";
import flex_digital from "./project-images/flex.png";
import merge from "./project-images/merge.png";
import struisbaai_accommodation from "./project-images/struisbaai_accommodation.png";
import paving from "./project-images/paving.png";
import unrealNFTs from "./project-images/unrealNFTS.png";
function Projects() {
  return (
    <div className='projects-page' id='projects'>
      <div className='project-page__wrapper'>
        <h2 data-aos='zoom-in'>What I've worked on</h2>
        {/* <h2 data-aos='zoom-in'>What I've currently working on</h2> */}
        <div className='project-holder'>
          {/**---------------------------------------------------------------------------------------------------------------- */}
          <div className='project'>
            <div className='project-image'>
              <img src={unrealNFTs} alt='project' />
            </div>

            <div className='project-description'>
              <h3 className='special_header'>Unreal NFTS</h3>
              <p>
                A website for a start-up company in South Africa specializing in
                listing Non-fungible tokens (NFTs). My client wanted a website
                focusing on visual design, striking colors and an easy to use
                layout. Their main requirement was displaying their expertise in
                assisting potential clients in listing NFTS in the crypto
                currency space.
              </p>
              <a href='https://www.unreal-nfts.com/' className='site-link'>
                View site
              </a>
            </div>
          </div>
          {/**---------------------------------------------------------------------------------------------------------------- */}
          <div className='project'>
            <div className='project-image'>
              <img src={flex_digital} alt='project' />
            </div>

            <div className='project-description'>
              <h3 className='special_header'>
                API Integration and Solution Design
              </h3>
              <p>
                Defining the solution architecture. Developing the scope for
                system integration with various 3rd party software. Developing,
                testing, deploying, and supporting the various software
                integrations. Configuring and supporting the Operations Platform
                and RFID Cloud Platform. Designing and building the required
                dashboards and reports for each solution.
              </p>
              {/* <a href='' className='site-link'>
                View site
              </a>*/}
            </div>
          </div>
          {/**---------------------------------------------------------------------------------------------------------------- */}
          <div className='project'>
            <div className='project-image'>
              <img src={flex_digital} alt='flex_digital logo' />
            </div>

            <div className='project-description'>
              <h3 className='special_header'>
                Robotic Process Automation – UI Path
              </h3>
              <p>
                Identifying and designing business processes for automation.
                Setting up, testing and monitoring automated workflows to ensure
                that business processes function at optimum efficiency without
                risk of error. Monitoring and maintaining automation
                post-implementation and resolving any potential issues to ensure
                smooth business operations.
              </p>
              {/* <a href='' className='site-link'>
                View site
              </a>*/}
            </div>
          </div>
          {/**---------------------------------------------------------------------------------------------------------------- */}
          <div className='project'>
            <div className='project-image'>
              <img src={merge} alt='' />
            </div>

            <div className='project-description'>
              <h3>Merge-IoT</h3>
              <p>
                A website for a start-up company in the Netherlands specializing
                in the Internet of Things (IoT). My client wanted an easy to
                use, clean and modern design showcasing there services and
                leading industry expertise.
              </p>
              <a href='https://merge-iot.com/' className='site-link'>
                View site
              </a>
            </div>
          </div>
          {/**---------------------------------------------------------------------------------------------------------------- */}

          <div className='project'>
            <div className='project-image'>
              <img src={struisbaai_accommodation} alt='' />
            </div>

            <div className='project-description'>
              <h3>Struisbaai Accommodation</h3>
              <p className='p-special'>
                A site for a holiday home in Struisbaai, visitors can view
                images of the house, view the rates of the house and find out
                about acitivites in/around the town.
              </p>
              <a
                href='https://accommodation-struisbaai.co.za/'
                className='site-link'
              >
                View site
              </a>
            </div>
          </div>
          {/**---------------------------------------------------------------------------------------------------------------- */}
          <div className='project'>
            <div className='project-image'>
              <img src={paving} alt='' />
            </div>

            <div className='project-description'>
              <h3>Value Pave</h3>
              <p className='p-special'>
                Value Pave is a paving company from Port Elizabeth. Currently
                Designing UI/UX for Value Pave. Provided continuous consultation
                on UI/UX and content of the website. Assisting with domain
                purchase, registration and web hosting. Frequent deployment to
                testing domain for client updates and approvals.
              </p>
              {/* <a href='' className='site-link'>
              View site
            </a>*/}
            </div>
          </div>
          {/**---------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
