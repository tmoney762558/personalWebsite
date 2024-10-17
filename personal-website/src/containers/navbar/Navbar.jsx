import React from "react";
import { useRef, useState, useEffect } from "react";
import menuIcon from "../../assets/menuIcon.png";
import "./navbar.css";

const Navbar = () => {
  const dropdownRef = useRef(null);
  let dropdownOpen = false;

  function toggleDropdown() {
    if (dropdownOpen) {
      dropdownRef.current.style.display = "none";
      dropdownOpen = false;
    } else {
      dropdownRef.current.style.display = "block";
      dropdownOpen = true;
    }
  }

  return (
    <div className="navbar section__padding">
      <nav>
        <a href="#about">Tyler Thomas</a>
        <div className="navbar__links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <button>Resume</button>
        </div>
        <div className="navbar__dropdown-container">
          <img
            className="navbar__dropdown-button"
            src={menuIcon}
            onClick={() => toggleDropdown()}
          ></img>
          <div className="navbar__dropdown-menu scale-up-top" ref={dropdownRef}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
