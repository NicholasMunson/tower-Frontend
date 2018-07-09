import React from 'react'
import PieChart from 'react-minimal-pie-chart'


const PieChartHome = (props) => {

    let beerLength = props.beerData.length
    let wineLength = props.wineData.length

    const dumbDumbData = [
        { value:beerLength, color:'#E38627'},
        { value:wineLength, color:'#dddd'},
    ]
    if(beerLength == Number){
    return(
    <PieChart data={dumbDumbData}  />
    )
}
}

export default PieChartHome