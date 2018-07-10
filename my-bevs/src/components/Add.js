import React, {Component, Fragment} from 'react';
import AddBeer from './AddBeer.js'

class Add extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    render() {
        return (
            <Fragment> 
                <p>Hello for the Add Page</p>
                <AddBeer />
            </Fragment>
        )
    }

}

export default Add