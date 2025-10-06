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
            <div className="my-bevs-header">My Bevs</div>
            <CustomNavBar textColorChange={props.textColorChange} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
