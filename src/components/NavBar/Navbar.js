import React, { Fragment, useState } from "react";

import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <div id="btn">
          <div className="bar-holder">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </label>
      <label htmlFor="check">
        <div className="close-bar" id="cancel">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
      <div className="social-media__wrapper">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
      <nav className="sidebar">
        <ul>
          <li className="active">
            <Link
              className="link"
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;
