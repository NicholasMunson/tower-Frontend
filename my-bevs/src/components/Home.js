import React from 'react';
import '../styles/home.css'
import PieChartHome from './PieChartHome.js'

const Home = (props) => {
    const wineData = props.wineData
    const beerData = props.beerData
    const isLoaded = props.isLoaded
    return (
        <div className='home-container'>
            <p className="welcome-text">Welcome to the home console. Below will show you the ratio of Beer to Wine in you collection of beverages.</p>
            { !isLoaded ? <PieChartHome wineData={wineData} beerData={beerData}/> : <h2>Loading...</h2> }
        </div>
    )
}

export default Home