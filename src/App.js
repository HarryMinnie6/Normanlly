import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import "./styles.css";
import {
  // browser router on index.js so that useLocation hook can work
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";

export default function App() {
  return (
    <Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/" exact component={Landing}></Route>
      </Switch>
    </Fragment>
  );
}
