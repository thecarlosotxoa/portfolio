import "./Hero_1.css";
import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/images/hero_1.jpg";

const Hero_1 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="guy on a laptop" />
      </div>
      <div className="content">
        <p>Hi, I'm a freelancer</p>
        <h1>Web Developer</h1>
        <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero_1;
