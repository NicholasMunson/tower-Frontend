import React, {Component, Fragment} from 'react';
import AddBeer from './AddBeer.js'
import AddWine from './AddWine.js'


class Add extends Component {
    constructor(props){
        super(props)
        this.state ={
            display: "a"
        }
    }

    handleChangeDisplay = (display) => {
        this.setState({display: display})

    }
    
    render() {
        let changeDisplay = this.state.display 
        return (
            <Fragment> 
                <p>Hello for the Add Page</p>
                {changeDisplay=="a" ? (<AddBeer handleChangeDisplay={this.handleChangeDisplay} />) :(<AddWine handleChangeDisplay={this.handleChangeDisplay} />) }
                
            </Fragment>
        )
    }
}

export default Add