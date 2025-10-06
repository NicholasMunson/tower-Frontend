import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/add.css";

const EditPost = (props) => {
  const currentBeer = props.currentBeer;

  const handleChange = (event) => {
    props.handleChange(event);
  };

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          props.handleDisplayChangeBack("a");
          props.handleUpdateBeerCard(event, currentBeer.id);
        }}
        className="form-container beer-form-container"
        key={props.id}
      >
        <h4 className="form-title">Edit your Bev</h4>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            defaultValue={currentBeer.brewery}
            placeholder="Brewery Name"
            onChange={handleChange}
            required
            name="brewery"
          />
          <Form.Control
            type="text"
            defaultValue={currentBeer.name}
            placeholder="Beer Name"
            onChange={handleChange}
            required
            name="name"
          />
          <Form.Control
            type="text"
            defaultValue={currentBeer.style}
            placeholder="Style"
            onChange={handleChange}
            required
            name="style"
          />
          <Form.Control
            type="number"
            step="any"
            defaultValue={currentBeer.ABV}
            placeholder="ABV"
            onChange={handleChange}
            required
            name="ABV"
          />
          <Form.Group controlId="formControlsSelect">
            <Form.Select
              required
              defaultValue={currentBeer.rating}
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
              defaultValue={currentBeer.notes}
              placeholder="Notes"
            />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" className="form-btn" type="submit">
          Submit
        </Button>
        <Button
          variant="primary"
          className="form-btn"
          onClick={() => props.handleDisplayChangeBack("a")}
        >
          Back
        </Button>
      </form>
    </Fragment>
  );
};

export default EditPost;
