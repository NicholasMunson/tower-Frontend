import React from 'react'
import {Button, Col, Row, Grid} from 'react-bootstrap'

const WineCard = (props) => {
    return (
        <div className="wine-card">
            <p className="winery">Winery: {props.wine.winery}</p>
            <p className="style">Style: {props.wine.style}</p>
            <p className="region">Region: {props.wine.region}</p>
            <p className="ABV">ABV: {props.wine.ABV}</p>
            <p className="rating">Rating: {props.wine.rating}</p>
            <p className="notes">Notes: {props.wine.notes}</p>
            <div className="btn-container">
                <Grid>
                    <Row xs={12} md={12} className="btn-row">
                        <Button bsStyle="primary"> Edit </Button>
                        <Button bsStyle="danger">Delete</Button>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default WineCard