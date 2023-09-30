import "../Header.css";
import email from "../email.png";
import linkedin from "../linkedin-logo.png";
import github from "../github.png";
import logo from "../mhlogo.png";
import dribble from "../dribble.png";
import Projects from "../pages/Projects";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

function Header() {
  return (
    <Router>
      <div className="navbar">
        <div className="nav">
          <img src={logo} alt="logo" className="logo" />
          <li className="sections">
            <ul>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </ul>
            <ul>About me</ul>
            <ul>
              <Link
                to="/projects"
                style={{ color: "white", textDecoration: "none" }}
              >
                Projects
              </Link>
            </ul>
            <ul>
              <Link
                to="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact me
              </Link>
            </ul>
          </li>
        </div>
        <div className="icons">
          <a href="https://mail.google.com/">
            <img src={email} alt="email icon" className="icon" />
          </a>
          <a href="https://github.com/muhammadhaseebb">
            <img src={github} alt="github icon" className="icon" />
          </a>
          <a href="https://dribbble.com/haseeb7">
            <img src={dribble} alt="dribble icon" className="icon" />
          </a>

          <a href="https://www.linkedin.com/in/muhammad-haseeb-ui-designer/">
            <img src={linkedin} alt="linkedin icon" className="icon" />
          </a>
        </div>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/projects" element={Projects} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;
