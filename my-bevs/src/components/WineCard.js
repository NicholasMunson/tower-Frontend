import React from 'react'

const WineCard = (props) => {
    return (
        <div className="wine-card">
            <p className="winery">Winery: {props.wine.winery}</p>
            <p className="style">Style: {props.wine.style}</p>
            <p className="region">Region: {props.wine.region}</p>
            <p className="ABV">ABV: {props.wine.ABV}</p>
            <p className="rating">Rating: {props.wine.rating}</p>
            <p className="notes">Notes: {props.wine.notes}</p>
        </div>
    )
}

export default WineCard