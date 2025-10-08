import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../styles/beerCard.css";

const BeverageCard = (props) => {
  const {
    beverage,
    type,
    handleEditClick,
    handleDelete,
    handleUpdate,
    handleDeleteClick,
  } = props;

  // Determine field labels and values based on beverage type
  const getFieldData = () => ({
    primaryField:
      type === "beer"
        ? { label: "Brewery", value: beverage.brewery }
        : { label: "Winery", value: beverage.winery },
    secondaryField:
      type === "beer"
        ? { label: "Name", value: beverage.name }
        : { label: "Region", value: beverage.region },
    style: beverage.style,
    abv: beverage.ABV,
    rating: beverage.rating,
    notes: beverage.notes,
    id: beverage.id,
  });

  const fieldData = getFieldData();
  const cardClass = type === "beer" ? "beer-card" : "wine-card";

  return (
    <div className={cardClass}>
      <div className="card-content">
        <p className={type === "beer" ? "brewery" : "winery"}>
          {fieldData.primaryField.label}: {fieldData.primaryField.value}
        </p>
        <p className={type === "beer" ? "name" : "region"}>
          {fieldData.secondaryField.label}: {fieldData.secondaryField.value}
        </p>
        <p className="style">Style: {fieldData.style}</p>
        <p className="ABV">ABV: {fieldData.abv}</p>
        <p className="rating">Rating: {fieldData.rating}</p>
        <p className="notes">Notes: {fieldData.notes}</p>
      </div>
      <div className="btn-container">
        <Row xs={12} md={12} className="btn-row">
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                handleEditClick(beverage, type);
              }}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                handleDeleteClick(beverage, type);
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

export default BeverageCard;
