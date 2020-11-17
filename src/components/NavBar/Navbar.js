import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;
