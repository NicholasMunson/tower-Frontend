import React from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../styles/hamburger.css";

const CustomNavBar = (props) => {
  const location = useLocation();

  return (
    <div className="header-container right">
      <Menu right>
        <Link
          to="/"
          className={`menu-item ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/home"
          className={`menu-item ${
            location.pathname === "/home" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/beer-list"
          className={`menu-item ${
            location.pathname === "/beer-list" ? "active" : ""
          }`}
        >
          BeerList
        </Link>
        <Link
          to="/wine-list"
          className={`menu-item ${
            location.pathname === "/wine-list" ? "active" : ""
          }`}
        >
          WineList
        </Link>
        <Link
          to="/add"
          className={`menu-item ${
            location.pathname === "/add" ? "active" : ""
          }`}
        >
          Add-Bevs
        </Link>
      </Menu>
    </div>
  );
};

export default CustomNavBar;
