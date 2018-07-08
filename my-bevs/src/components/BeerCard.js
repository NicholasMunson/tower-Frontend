import React from 'react'

const BeerCard = (props) => {
    console.log(props.beer)
    return (
        <div className="beer-card">
            <p className="brewery">Brewery: {props.beer.brewery}</p>
            <p className="name">Name: {props.beer.name}</p>
            <p className="style">Style: {props.beer.style}</p>
            <p className="ABV">ABV: {props.beer.ABV}</p>
            <p className="rating">Rating: {props.beer.rating}</p>
            <p className="notes">Notes: {props.beer.notes}</p>
        </div>
    )
}

export default BeerCard