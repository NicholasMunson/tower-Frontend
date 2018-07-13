import React, {Component, Fragment} from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import '../styles/add.css'
class AddWine extends Component {
    constructor(props){
        super(props)
        this.state = { 
            winery: "",
            name: "",
            style: "",
            rating: "",
            ABV: "",
            notes: ""

        }
        console.log(this.props)
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
        })
        .then(response => response.json())
        .catch(err => {
            console.error(err)
        })    
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
                <form onSubmit={this.handleSubmit}  className="form-container" key={this.id}>
                <h4 className="form-title">Add your Wine!</h4>
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
                    <Button className="change-btn btn-primary form-btn" onClick={() => this.props.handleChangeDisplay("a")}>Add Beer</Button>
                </form>
            </Fragment>
        )
    }

}

export default AddWine