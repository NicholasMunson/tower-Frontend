import React from 'react';
import '../styles/home.css'
import PieChartHome from './PieChartHome.js'

const Home = (props) => {
    const wineData = props.wineData
    const beerData = props.beerData
    const isLoaded = props.isLoaded
    return (
        <div className='home-container'>
            { !isLoaded ? <PieChartHome wineData={wineData} beerData={beerData}/> : <h2>Loading...</h2> }
        </div>
    )
}

export default Home