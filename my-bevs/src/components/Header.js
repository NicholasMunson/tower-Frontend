import React from "react";
import CustomNavBar from "./CustomNavBar";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/header.css";

function Header(props) {
  return (
    <div>
      <Container fluid className="page-header">
        <Row>
          <Col>
            <div className="my-bevs-header">
              <div className="header-text">My Bevs</div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header-menu">
      </div>
        <CustomNavBar textColorChange={props.textColorChange} />
    </div>
  );
}

export default Header;
