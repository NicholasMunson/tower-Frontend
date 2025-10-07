import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/add.css";

const EditBeverage = ({
  type,
  currentBeverage,
  handleChange,
  handleUpdate,
  handleDisplayChangeBack,
}) => {
  const isBeer = type === "beer";

  const getFormFields = () => {
    if (isBeer) {
      return [
        {
          type: "text",
          name: "brewery",
          placeholder: "Brewery Name",
          defaultValue: currentBeverage.brewery,
          required: true,
        },
        {
          type: "text",
          name: "name",
          placeholder: "Beer Name",
          defaultValue: currentBeverage.name,
          required: true,
        },
        {
          type: "text",
          name: "style",
          placeholder: "Style",
          defaultValue: currentBeverage.style,
          required: true,
        },
        {
          type: "number",
          name: "ABV",
          placeholder: "ABV",
          defaultValue: currentBeverage.ABV,
          required: true,
          step: "any",
        },
      ];
    } else {
      return [
        {
          type: "text",
          name: "winery",
          placeholder: "Winery Name",
          defaultValue: currentBeverage.winery,
          required: true,
        },
        {
          type: "text",
          name: "region",
          placeholder: "Wine Region",
          defaultValue: currentBeverage.region,
          required: true,
        },
        {
          type: "text",
          name: "style",
          placeholder: "Style",
          defaultValue: currentBeverage.style,
          required: true,
        },
        {
          type: "number",
          name: "ABV",
          placeholder: "ABV",
          defaultValue: currentBeverage.ABV,
          required: true,
          step: "any",
        },
      ];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDisplayChangeBack("a");
    handleUpdate(event, currentBeverage.id);
  };

  return (
    <Fragment>
      <div
        className={`form-container ${
          isBeer ? "beer-form-container" : "wine-form-container"
        }`}
      >
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              {getFormFields().map((field, index) => (
                <Form.Control
                  key={`${field.name}-${index}`}
                  type={field.type}
                  step={field.step}
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  required={field.required}
                  name={field.name}
                />
              ))}
              <Form.Select
                required
                defaultValue={currentBeverage.rating}
                onChange={handleChange}
                name="rating"
              >
                <option value="">{isBeer ? "Beer" : "Wine"} Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
              <Form.Control
                as="textarea"
                name="notes"
                onChange={handleChange}
                defaultValue={currentBeverage.notes}
                placeholder="Notes"
              />
            </Form.Group>
            <Button variant="primary" className="form-btn" type="submit">
              Submit
            </Button>
            <Button
              variant="danger"
              className="form-btn"
              onClick={() => handleDisplayChangeBack("a")}
            >
              Back
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBeverage;
