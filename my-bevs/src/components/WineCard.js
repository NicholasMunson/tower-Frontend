import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const WineCard = (props) => {
  return (
    <div className="wine-card">
      <p className="winery">Winery: {props.wine.winery}</p>
      <p className="style">Style: {props.wine.style}</p>
      <p className="region">Region: {props.wine.region}</p>
      <p className="ABV">ABV: {props.wine.ABV}</p>
      <p className="rating">Rating: {props.wine.rating}</p>
      <p className="notes">Notes: {props.wine.notes}</p>
      <div className="btn-container">
        <Row xs={12} md={12} className="btn-row">
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                props.handleDisplayChange("b");
                props.updateWineCard(props.wine);
              }}
            >
              {" "}
              Edit{" "}
            </Button>
            <Button
              variant="danger"
              onClick={(event) => {
                props.handleWineDelete(event, props.wine.id);
              }}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WineCard;
