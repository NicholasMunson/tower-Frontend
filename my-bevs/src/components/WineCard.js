import React from 'react'

 const WineCard = (props) => {
     console.log(props.wine);
     
return (
    <div className="wine-card">
        <p className="winery">Winery: {props.wine.winery}</p>
        <p className="style">Style: {props.wine.style}</p>
        <p className="region">Region: {props.wine.region}</p>
        <p className="ABV">ABV: {props.wine.ABV}</p>
        <p className="notes">{props.wine.notes}</p>
    </div>
)
}

export default WineCard