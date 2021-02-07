import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className='contact-page' id='contact'>
      <div className='contact-details__holder'>
        <h1>Get In Contact With Me</h1>
        <p>
          If you have a project that you want to get started, think you need my
          help with something or just fancy saying hi? Then get in touch.
        </p>
        <p>harryminnie6@gmail.com</p>
        <p>+27 (0) 76 591 9127</p>
      </div>
    </div>
  );
}

export default Contact;
