import React from 'react'
import { Button, Row, Grid } from 'react-bootstrap'

const BeerCard = (props) => {
    return (
        <div className="beer-card">
            <p className="brewery">Brewery: {props.beer.brewery}</p>
            <p className="name">Name: {props.beer.name}</p>
            <p className="style">Style: {props.beer.style}</p>
            <p className="ABV">ABV: {props.beer.ABV}</p>
            <p className="rating">Rating: {props.beer.rating}</p>
            <p className="notes">Notes: {props.beer.notes}</p>
            <div className="btn-container">
                <Grid>
                    <Row xs={12} md={12} className="btn-row">
                        <Button bsStyle="primary" onClick={ () => {props.handleDisplayChange("b"); props.updateBevCard(props.beer)} }> Edit </Button>
                        <Button bsStyle="danger" onClick={ (event) => {props.handleBeerDelete(event, props.beer.id)}}>Delete</Button>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default BeerCard