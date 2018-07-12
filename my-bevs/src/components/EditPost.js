import React, {Fragment} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import '../styles/edit.css'
const EditPost = (props) => {
console.log(props)
    return (
        <Fragment>
            <h4 className="form-title">Edit your Bev</h4>
            <form
                // onSubmit={this.handleSubmit} 
                onSubmit={props.handleDisplayChangeBack} className="edit-form-container"
                // key={this.id}
                >
                <FormGroup>
                    <FormControl
                        type="text"
                        value={props.props.brewery}
                        placeholder="Brewery Name"
                        onChange={props.handleChange}
                        required="required"
                        name="brewery"/>
                    <FormControl
                        type="text"
                        value={props.props.name}
                        placeholder="Beer Name"
                        // onChange={props.handleChanged}
                        required="required"
                        name="name"/>
                    <FormControl
                        type="text"
                        value={props.props.style}
                        placeholder="Style"
                        onChange={props.handleChange}
                        required="required"
                        name="style"/>
                    <FormControl
                        type="number"
                        step="any"
                        value={props.props.ABV}
                        placeholder="ABV"
                        onChange={props.handleChange}
                        required="required"
                        name="ABV"/>
                    <FormGroup controlId="formControlsSelect">
                        <FormControl
                            required="required"
                            componentClass="select"
                            value={props.props.rating}
                            onChange={props.handleChange}
                            name="rating">
                            <option type='text' default="default">Beer Rating</option>
                            <option type='number' value="1">1</option>
                            <option type='number' value="2">2</option>
                            <option type='number' value="3">3</option>
                            <option type='number' value="4">4</option>
                            <option type='number' value="5">5</option>
                        </FormControl>
                        <FormControl
                            type="text"
                            componentClass="textarea"
                            name="notes"
                            onChange={props.handleChange}
                            value={props.props.notes}
                            placeholder="Notes"/>
                    </FormGroup>
                </FormGroup>
                <Button className="btn-primary form-btn" type="submit">Submit</Button>
                <Button
                    className="btn-primary form-btn"
                    onClick={props.handleDisplayChangeBack}>Back</Button>
            </form>
        </Fragment>
    )
}

export default EditPost