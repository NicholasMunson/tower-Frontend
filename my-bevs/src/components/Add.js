import React, {Component, Fragment} from 'react';
import AddBeer from './AddBeer.js'

class Add extends Component {
    constructor(props){
        super(props)
        this.state ={
            display: "a"
        }
    }

    

    render() {
        
        return (
            <Fragment> 
                <p>Hello for the Add Page</p>
                <AddBeer handleChange={this.props.handleChange} postData={this.props.postData} />

            </Fragment>
        )
    }

}

export default Add