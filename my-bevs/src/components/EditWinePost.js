import React, {Fragment, Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import '../styles/add.css'

class EditWinePost extends Component{
    render(){
        let currentWine = this.props.currentWine
        return (
            <Fragment>
                <form
                    onSubmit={ (event) => {{this.props.handleDisplayChange("a")}; {this.props.handleUpdateWineCard(event, currentWine.id )}}}
                    className="form-container wine-form-container"
                    key={this.id}>
                    <h4 className="form-title">Edit your Bev</h4>
                    <FormGroup>
                        <FormControl
                            type="text"
                            defaultValue={currentWine.winery}
                            placeholder="Winery Name"
                            onChange={this.handleChange}
                            required="required"
                            name="winery"/>
                        <FormControl 
                            type="text" 
                            defaultValue={currentWine.region} 
                            placeholder="Wine Region"
                            onChange={this.handleChange}
                            required="required" name="region"/>
                        <FormControl
                            type="text"
                            defaultValue={currentWine.style}
                            placeholder="Style"
                            onChange={this.handleChange}
                            required="required"
                            name="style"/>
                        <FormControl
                            type="number"
                            step="any"
                            defaultValue={currentWine.ABV}
                            placeholder="ABV"
                            onChange={this.handleChange}
                            required="required"
                            name="ABV"/>
                        <FormGroup controlId="formControlsSelect">
                            <FormControl
                                required="required"
                                componentClass="select"
                                defaultValue={currentWine.rating}
                                onChange={this.handleChange}
                                name="rating">
                                <option type='text' default="default">Wine Rating</option>
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
                                defaultValue={currentWine.notes}
                                placeholder="Notes"/>
                        </FormGroup>
                    </FormGroup>
                    <Button className="btn-primary form-btn" type="submit">Submit</Button>
                    <Button
                        className="btn-primary form-btn"
                        onClick={() => this.props.handleDisplayChange('a')}>Back</Button>
                </form>
            </Fragment>
        )
    }
}

export default EditWinePost