// import React, {Component} from 'react';
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




// class WineList extends Component {
//     render() {
//         const wines = this.props.wineData
//         console.log(wines)
//         return (
//             <p>Hello for the WineList Page</p>
//         )
//     }

// }

export default WineList