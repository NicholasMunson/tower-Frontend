import React from 'react'
import WineCard from '../components/WineCard.js'
import '../styles/card-container.css'

const WineList = (props) => {
    const wineCard = props.wineData.map(wine => <WineCard wine={wine} handleDisplayChange={props.handleDisplayChange} handleWineDelete={props.handleWineDelete} updateWineCard={props.updateWineCard} key={wine.id}/>)
    const revWineCard = wineCard.reverse()
    

    return(
        <div className="wine-card-container">
        {[revWineCard]}
        </div>

    )
}

export default WineList