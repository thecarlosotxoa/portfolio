import "./Navbar.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const handleClick = () => setMenuClick(!menuClick);

  // adding use state to set the color for navbar when scrolling through Y axis
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100){
      setNavbarColor(true);
    }
    else{
      setNavbarColor(false);
    }
  };

  // adding event listener to window scroll to trigger navbar color change
  window.addEventListener("scroll", changeNavbarColor);

  return (
    // add if statements to classname to change depending on scroll position
    <div className={navbarColor ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="burger-menu" onClick={handleClick}>
        {menuClick ? (<FaTimes size={20} style={{ color: "#fff" }} /> ) : (<FaBars size={20} style={{ color: "#fff" }} />) }                     
      </div>
    </div>
  );
};

export default Navbar;
