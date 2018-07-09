import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import '../styles/pie-chart-home.css'

const PieChartHome = (props) => {

    let beerLength = props.beerData.length
    let wineLength = props.wineData.length

    const dumbDumbData = [
        {
            value: beerLength,
            color: '#E38627'
        }, {
            value: wineLength,
            color: '#9932CC'
        }
    ]
    return (
        <section className="pie-chart-container"> 
            <div className="color-key-container"> 
                <div className="key-container"> 
                    <p>Wine</p>
                    <div className="color-key wine"></div>
                </div>
                <div className="key-container"> 
                    <p>Beer</p>
                    <div className="color-key beer"></div>
                </div>
            </div>
            <PieChart className="pie-chart" data={dumbDumbData}/>
        </section>
    )

}

export default PieChartHome