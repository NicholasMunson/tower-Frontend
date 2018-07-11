import React, {Component} from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import '../styles/add.css'
class AddBeer extends Component {
    constructor(props){
        super(props)
        
        // this.state = {
        //     brewery: "",
        //     name: "",
        //     style: "",
        //     rating: "",
        //     ABV: "",
        //     notes: ""

        // }
    }

    // postData = (event) => {
    //     event.preventDefault()
    //     const body = JSON.stringify(this.state)
    //     console.log(body);
        
    //     fetch("https://mybevs.herokuapp.com/beer",{
    //         method: "POST",
    //         body: body,
    //         headers: new Headers({
    //             "content-type": "application/json"
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(posted => {
    //         posted:"posted" 
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })    
        
    // }    
    
    // resetState = () => {
    //     this.setState = {
    //         brewery: "",
    //         name: "",
    //         style: "",
    //         rating: "",
    //         ABV: "",
    //         notes: ""

    //     }
    // }
    
    // handleChange = (event) => {

    //     const key = event.target.name
    //     const value = event.target.value  

    //     this.setState({
    //         [key]: value
    //     })

    // }

    render() {
        return (
            <form onSubmit={this.props.postData}  className="form-container">
                <FormGroup>
                    <FormControl
                        type="text"
                        value={this.props.brewery}
                        placeholder="Brewery Name"
                        onChange={this.handleChange}
                        required
                        name="brewery"/>
                    <FormControl
                        type="text"
                        value={this.props.name}
                        placeholder="Beer Name"
                        onChange={this.handleChange}
                        required
                        name="name"/>
                    <FormControl
                        type="text"
                        value={this.props.style}
                        placeholder="Style"
                        onChange={this.handleChange}
                        required
                        name="style"/>
                    <FormControl
                        type="number"
                        value={this.props.ABV}
                        placeholder="ABV"
                        onChange={this.handleChange}
                        required
                        name="ABV"/>
                    <FormGroup controlId="formControlsSelect">
                    <FormControl 
                        required
                        componentClass="select"  
                        value={this.props.rating}
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
                        value={this.props.notes} 
                        placeholder="Notes" />
                    </FormGroup>    
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
            
        )
    }

}

export default AddBeer