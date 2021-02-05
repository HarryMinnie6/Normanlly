import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Normanlly_Logo.jpg"
import "./Home.css";

function Home() {
  // for bottom line to disappear on scroll
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY > 10);
    });
  }, []);

  return (
    <div className='home-page' id='/'>
      <div className={scrollUp ? "bottom-line2" : "bottom-line"}></div>

      <section className='landing-section' id='home'>
        <div className='logoHolder'>
       <img src={logo}/>
        </div>
      </section>
    </div>
  );
}

export default Home;
