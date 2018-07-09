import React from 'react';
import '../styles/home.css'
import PieChartHome from './PieChartHome.js'

const Home = (props) => {
    const wineData = props.wineData
    const beerData = props.beerData
    return (
        <div className='home-container'>
            <p>Welcome to the home console</p>
            <p>lorem</p>
            <PieChartHome wineData={wineData} beerData={beerData}/>
        </div>
    )
}

export default Home