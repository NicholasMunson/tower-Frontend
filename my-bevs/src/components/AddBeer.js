import React, {Component} from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap'
class AddBeer extends Component {
    constructor(props){
        super(props)

        // this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            brewery: "",
            name: "",
            style: "",
            rating: "",
            ABV: "",
            notes: ""

        }
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
            <form>
                <FormGroup>
                    <FormControl
                        type="text"
                        value={this.state.brewery}
                        placeholder="Brewery Name"
                        onChange={this.handleChange}
                        required
                        name="brewery"/>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Beer Name"
                        onChange={this.handleChange}
                        required
                        name="name"/>
                    <FormControl
                        type="text"
                        value={this.state.style}
                        placeholder="Style"
                        onChange={this.handleChange}
                        required
                        name="style"/>
                    <FormControl
                        type="number"
                        value={this.state.ABV}
                        placeholder="ABV"
                        onChange={this.handleChange}
                        required
                        name="ABV"/>
                    <FormGroup controlId="formControlsSelect">
                    <FormControl 
                        required
                        componentClass="select"  
                        value={this.state.rating}
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
                        value={this.state.notes} 
                        placeholder="Notes" />
                    </FormGroup>    
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
            
        )
    }

}

export default AddBeer