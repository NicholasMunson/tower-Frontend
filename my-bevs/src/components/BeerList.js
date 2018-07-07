import React, {Component, Fragment} from 'react';
import BeerCard from '../components/BeerCard.js'


class BeerList extends React.Component   {
    render(){
        return (
            <Fragment>
                <p>Hello for the BeerList Page</p>
                <BeerCard beerData={this.props.beerData}/>
            </Fragment>
        )
    }
}

export default BeerList