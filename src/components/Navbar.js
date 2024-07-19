import "./Navbar.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const handleClick = () => setMenuClick(!menuClick);

  return (
    <div className="header">
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
