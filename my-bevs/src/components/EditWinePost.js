import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/add.css";

const EditWinePost = (props) => {
  const currentWine = props.currentWine;

  const handleChange = (event) => {
    props.handleChange(event);
  };

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          props.handleDisplayChange("a");
          props.handleUpdateWineCard(event, currentWine.id);
        }}
        className="form-container wine-form-container"
        key={props.id}
      >
        <h4 className="form-title">Edit your Bev</h4>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            defaultValue={currentWine.winery}
            placeholder="Winery Name"
            onChange={handleChange}
            required
            name="winery"
          />
          <Form.Control
            type="text"
            defaultValue={currentWine.region}
            placeholder="Wine Region"
            onChange={handleChange}
            required
            name="region"
          />
          <Form.Control
            type="text"
            defaultValue={currentWine.style}
            placeholder="Style"
            onChange={handleChange}
            required
            name="style"
          />
          <Form.Control
            type="number"
            step="any"
            defaultValue={currentWine.ABV}
            placeholder="ABV"
            onChange={handleChange}
            required
            name="ABV"
          />
          <Form.Group controlId="formControlsSelect">
            <Form.Select
              required
              defaultValue={currentWine.rating}
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
              defaultValue={currentWine.notes}
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
          onClick={() => props.handleDisplayChange("a")}
        >
          Back
        </Button>
      </form>
    </Fragment>
  );
};

export default EditWinePost;
