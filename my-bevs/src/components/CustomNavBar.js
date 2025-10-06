import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../styles/hamburger.css";

const CustomNavBar = (props) => {
  return (
    <div className="header-container right">
      <Menu right>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/home" className="nav-item">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/beer-list" className="nav-item">
            BeerList
          </Nav.Link>
          <Nav.Link as={Link} to="/wine-list" className="nav-item">
            WineList
          </Nav.Link>
          <Nav.Link as={Link} to="/add" className="nav-item">
            Add-Bevs
          </Nav.Link>
        </Nav>
      </Menu>
    </div>
  );
};

export default CustomNavBar;
