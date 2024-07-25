import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from "react";
import React1 from "../assets/images/react1.png";
import Python1 from "../assets/images/python1.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
          mi, in gravida neque. Duis placerat ante eu justo faucibus, et
          vestibulum mi malesuada. Sed vel dui non mauris mattis pellentesque.
          Donec vel neque vel ipsum tincidunt laoreet vel id nisi.
        </p>
        <Link to="/contact">
            <button className="btn">Contact Me</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="Placeholder" /> 
            </div>
            <div className="img-stack bottom">
                <img src={Python1} className="img" alt="Placeholder" /> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
