import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState();

  const onClick = () => {
    setClick(!click);
  };
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
      <nav className="sidebar">
        <ul>
          <li className="active">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className='contact-details__wrapper'>
          <div className='email-details_wrapper'>
            <p className='p__header'>Email</p>
            <p className='p__detail'>shaun@invictus-tech.nl</p>
          </div>
          <div className='phone-details__wrapper'>
            <p className='p__header'>Phone</p>
            <p className='p__detail'>+31 64 005 1485</p>
          </div>
          <div className='address-details__wrapper'>
            <p className='p__header'>Physical Address</p>
            <p className='p__detail'>Laan van Broekpolder 314</p>
            <p className='p__detail'>Heemskerk 1967kg</p>
          </div>
        </div> */}
      </nav>
    </Fragment>
  );
}

export default Navbar;
