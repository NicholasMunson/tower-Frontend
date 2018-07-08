import React from 'react'
import WineCard from '../components/WineCard.js'

const WineList = (props) => {
    const wineCard = props.wineData.map(wine => <WineCard wine={wine} key={wine.id}/>)
    console.log(wineCard);
    

    return(
        <div className="wine-card-container">
        {[wineCard]}
        </div>

    )
}

export default WineList