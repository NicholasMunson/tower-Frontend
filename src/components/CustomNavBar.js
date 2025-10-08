import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../styles/hamburger.css";

const CustomNavBar = (props) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-container right">
      <Menu right isOpen={isMenuOpen} onStateChange={handleMenuStateChange}>
        <Link
          to="/"
          className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          About
        </Link>
        <Link
          to="/home"
          className={`menu-item ${
            location.pathname === "/home" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/beer-list"
          className={`menu-item ${
            location.pathname === "/beer-list" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          BeerList
        </Link>
        <Link
          to="/wine-list"
          className={`menu-item ${
            location.pathname === "/wine-list" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          WineList
        </Link>
        <Link
          to="/add"
          className={`menu-item ${
            location.pathname === "/add" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Add-Bevs
        </Link>
      </Menu>
    </div>
  );
};

export default CustomNavBar;
