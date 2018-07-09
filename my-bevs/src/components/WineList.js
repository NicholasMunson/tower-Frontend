import React from 'react'
import WineCard from '../components/WineCard.js'
import '../styles/card-container.css'

const WineList = (props) => {
    const wineCard = props.wineData.map(wine => <WineCard wine={wine} key={wine.id}/>)
    console.log(wineCard);
    

    return(
        <div className="card-container">
        {[wineCard]}
        </div>

    )
}

export default WineList