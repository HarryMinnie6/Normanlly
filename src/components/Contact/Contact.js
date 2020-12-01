import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className='contact-page' id='contact'>
      <div className='contact-details__holder'>
        <p>Get In Contact With Us</p>
        <p>harryminnie6@gmail.com</p>
        <p>+27 (0) 76 591 9127</p>
      </div>
    </div>
  );
}

export default Contact;
