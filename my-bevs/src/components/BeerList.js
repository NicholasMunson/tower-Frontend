import React, {Component} from 'react';
import BeerCard from '../components/BeerCard.js'
class BeerList extends Component {
    constructor(props){
        super(props)
        
    }
    





    render() {
        return (
            <React.Fragment>
                <p>Hello for the BeerList Page</p>
                <BeerCard beerData={this.props.beerData.beer}/> 
            </React.Fragment>
        )
    }

}

export default BeerList