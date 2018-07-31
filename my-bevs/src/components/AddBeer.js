import React, {Component, Fragment} from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../styles/add.css'
class AddBeer extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            brewery: "",
            name: "",
            style: "",
            rating: "",
            ABV: "",
            notes: ""
        }  
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const body = JSON.stringify(this.state)
        
        fetch("https://mybevs.herokuapp.com/beer",{
            method: "POST",
            body: body,
            headers: new Headers({
                "content-type": "application/json"
            })
        }).then(this.sendDisplay())
        .catch(err => {
            console.error(err)
        })      
    }    
    sendDisplay= () => {
        console.log(this.props, "it worked")
        // this.props.handleDisplayChange("b")
    }
        handleChange = (event) => {
            const key = event.target.name
            const value = event.target.value  
            this.setState({
                [key]: value
            })
        }

    render() {
        return (
            <Fragment> 
                <form onSubmit={() => {this.handleSubmit ; this.sendDisplay} }  className="form-container beer-form-container" key={this.id}>
                <h4 className="form-title">Add your Beer!</h4>
                    <FormGroup>
                        <FormControl
                            type="text"
                            value={this.brewery}
                            placeholder="Brewery Name"
                            onChange={this.handleChange}
                            required
                            name="brewery"/>
                        <FormControl
                            type="text"
                            value={this.name}
                            placeholder="Beer Name"
                            onChange={this.handleChange}
                            required
                            name="name"/>
                        <FormControl
                            type="text"
                            value={this.style}
                            placeholder="Style"
                            onChange={this.handleChange}
                            required
                            name="style"/>
                        <FormControl
                            type="number"
                            step="any"
                            value={this.ABV}
                            placeholder="ABV"
                            onChange={this.handleChange}
                            required
                            name="ABV"/>
                        <FormGroup controlId="formControlsSelect">
                        <FormControl 
                            required
                            componentClass="select"  
                            value={this.rating}
                            onChange={this.handleChange}
                            name="rating">
                                <option type='text' default>Beer Rating</option>
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
                            value={this.notes} 
                            placeholder="Notes" />
                        </FormGroup>    
                    </FormGroup>
                    <Button type="submit" className="btn-primary form-btn">Submit</Button>
                    <Button className="change-btn btn-primary form-btn" onClick={() => this.props.handleChangeDisplay("b")}>Add Wine</Button>
                </form>
            </Fragment>
        )
    }

}

export default AddBeer