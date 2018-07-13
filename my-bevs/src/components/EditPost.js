import React, {Fragment, Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import '../styles/add.css'

class EditPost extends Component{
    render(){
        let currentBeer = this.props.currentBeer
        console.log(currentBeer.id)
        return (
            <Fragment>
                
                <form
                    onSubmit={ (event) => {{this.props.handleDisplayChangeBack("a")}; {this.props.handleUpdateBeerCard(event, currentBeer.id )}}}
                    className="form-container"
                    key={this.id}>
                    <h4 className="form-title">Edit your Bev</h4>
                    <FormGroup>
                        <FormControl
                            type="text"
                            defaultValue={currentBeer.brewery}
                            placeholder="Brewery Name"
                            onChange={this.handleChange}
                            required="required"
                            name="brewery"/>
                        <FormControl 
                            type="text" 
                            defaultValue={currentBeer.name} 
                            placeholder="Beer Name"
                            onChange={this.handleChange}
                            required="required" name="name"/>
                        <FormControl
                            type="text"
                            defaultValue={currentBeer.style}
                            placeholder="Style"
                            onChange={this.handleChange}
                            required="required"
                            name="style"/>
                        <FormControl
                            type="number"
                            step="any"
                            defaultValue={currentBeer.ABV}
                            placeholder="ABV"
                            onChange={this.handleChange}
                            required="required"
                            name="ABV"/>
                        <FormGroup controlId="formControlsSelect">
                            <FormControl
                                required="required"
                                componentClass="select"
                                defaultValue={currentBeer.rating}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                                defaultValue={currentBeer.notes}
                                placeholder="Notes"/>
                        </FormGroup>
                    </FormGroup>
                    <Button className="btn-primary form-btn" type="submit">Submit</Button>
                    <Button
                        className="btn-primary form-btn"
                        onClick={() => this.props.handleDisplayChangeBack('a')}>Back</Button>
                </form>
            </Fragment>
        )
    }
}

export default EditPost