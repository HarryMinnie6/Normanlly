import React, { useState, useEffect } from "react";
import logo from "../../images/Normanlly_Logo.jpg";
import name from "../../images/Normanlly_name.JPG";
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
    <div className="home-page" id="home">
      <div className={scrollUp ? "bottom-line2" : "bottom-line"}></div>
      <section className="landing-section" id="home">
        <div className="logoHolder">
          <img src={logo} />
        </div>
        <div className="nameHolder">
          <img src={name} />
        </div>
        <p className=" home-page_p">Web Design and Development</p>
      </section>
    </div>
  );
}

export default Home;
