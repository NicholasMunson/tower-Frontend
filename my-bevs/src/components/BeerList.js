import React from 'react'
import BeerCard from '../components/BeerCard.js'

const BeerList = (props) => {
    const beerCard = props.beerData.map(beer => <BeerCard beer={beer} key={beer.id}/>)
    console.log(beerCard)
    return(
        <div className="beer-card-container">
        {[beerCard]}
        </div>
    )
}

export default BeerList