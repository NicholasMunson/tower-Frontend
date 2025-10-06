import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { API_ENDPOINTS } from "../config/api";
import "../styles/add.css";

const AddBeverage = ({ type }) => {
  const isBeer = type === "beer";

  const [formData, setFormData] = useState({
    // Beer fields
    brewery: "",
    name: "",
    // Wine fields
    winery: "",
    region: "",
    // Shared fields
    style: "",
    rating: "",
    ABV: "",
    notes: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare data based on beverage type
    const submitData = isBeer
      ? {
          brewery: formData.brewery,
          name: formData.name,
          style: formData.style,
          rating: formData.rating,
          ABV: formData.ABV,
          notes: formData.notes,
        }
      : {
          winery: formData.winery,
          region: formData.region,
          style: formData.style,
          rating: formData.rating,
          ABV: formData.ABV,
          notes: formData.notes,
        };

    const body = JSON.stringify(submitData);
    const url = isBeer ? API_ENDPOINTS.BEER.POST() : API_ENDPOINTS.WINE.POST();

    fetch(url, {
      method: "POST",
      body: body,
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .then(() => {
        console.log("Submission successful");
        // Reset form after successful submission
        setFormData({
          brewery: "",
          name: "",
          winery: "",
          region: "",
          style: "",
          rating: "",
          ABV: "",
          notes: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getFormFields = () => {
    if (isBeer) {
      return [
        {
          type: "text",
          name: "brewery",
          placeholder: "Brewery Name",
          value: formData.brewery,
          required: true,
        },
        {
          type: "text",
          name: "name",
          placeholder: "Beer Name",
          value: formData.name,
          required: true,
        },
        {
          type: "text",
          name: "style",
          placeholder: "Style",
          value: formData.style,
          required: true,
        },
        {
          type: "number",
          name: "ABV",
          placeholder: "ABV",
          value: formData.ABV,
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
          value: formData.winery,
          required: true,
        },
        {
          type: "text",
          name: "region",
          placeholder: "Wine Region",
          value: formData.region,
          required: true,
        },
        {
          type: "text",
          name: "style",
          placeholder: "Style",
          value: formData.style,
          required: true,
        },
        {
          type: "number",
          name: "ABV",
          placeholder: "ABV",
          value: formData.ABV,
          required: true,
          step: "any",
        },
      ];
    }
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
            <h4 className="form-title">Add your {isBeer ? "Beer" : "Wine"}!</h4>
            <Form.Group className="mb-3">
              {getFormFields().map((field, index) => (
                <Form.Control
                  key={`${field.name}-${index}`}
                  type={field.type}
                  step={field.step}
                  value={field.value}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  required={field.required}
                  name={field.name}
                />
              ))}
              <Form.Select
                required
                value={formData.rating}
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
                value={formData.notes}
                placeholder="Notes"
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="form-btn">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBeverage;
