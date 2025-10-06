import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/add.css";

const AddWine = (props) => {
  const [formData, setFormData] = useState({
    winery: "",
    region: "",
    style: "",
    rating: "",
    ABV: "",
    notes: "",
  });

  const handleWineSubmit = (event) => {
    event.preventDefault();
    const body = JSON.stringify(formData);

    fetch("https://mybevs.herokuapp.com/wine", {
      method: "POST",
      body: body,
      headers: new Headers({
        "content-type": "application/json",
      }),
    }).catch((err) => {
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

  return (
    <Fragment>
      <form
        onSubmit={handleWineSubmit}
        className="form-container wine-form-container"
        key={props.id}
      >
        <h4 className="form-title">Add your Wine!</h4>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={formData.winery}
            placeholder="Winery Name"
            onChange={handleChange}
            required
            name="winery"
          />
          <Form.Control
            type="text"
            value={formData.region}
            placeholder="Wine Region"
            onChange={handleChange}
            required
            name="region"
          />
          <Form.Control
            type="text"
            value={formData.style}
            placeholder="Style"
            onChange={handleChange}
            required
            name="style"
          />
          <Form.Control
            type="number"
            step="any"
            value={formData.ABV}
            placeholder="ABV"
            onChange={handleChange}
            required
            name="ABV"
          />
          <Form.Group controlId="formControlsSelect">
            <Form.Select
              required
              value={formData.rating}
              onChange={handleChange}
              name="rating"
            >
              <option value="">Wine Rating</option>
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
        </Form.Group>
        <Button type="submit" variant="primary" className="form-btn">
          Submit
        </Button>
        <Button
          variant="primary"
          className="change-btn form-btn"
          onClick={() => props.handleChangeDisplay("a")}
        >
          Add Beer
        </Button>
      </form>
    </Fragment>
  );
};

export default AddWine;
