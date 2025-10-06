import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/add.css";

const AddBeer = (props) => {
  const [formData, setFormData] = useState({
    brewery: "",
    name: "",
    style: "",
    rating: "",
    ABV: "",
    notes: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = JSON.stringify(formData);

    fetch("https://mybevs.herokuapp.com/beer", {
      method: "POST",
      body: body,
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .then(() => {
        console.log(props, "it worked");
        // props.handleDisplayChange("b")
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

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className="form-container beer-form-container"
        key={props.id}
      >
        <h4 className="form-title">Add your Beer!</h4>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={formData.brewery}
            placeholder="Brewery Name"
            onChange={handleChange}
            required
            name="brewery"
          />
          <Form.Control
            type="text"
            value={formData.name}
            placeholder="Beer Name"
            onChange={handleChange}
            required
            name="name"
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
              <option value="">Beer Rating</option>
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
          onClick={() => props.handleChangeDisplay("b")}
        >
          Add Wine
        </Button>
      </form>
    </Fragment>
  );
};

export default AddBeer;
