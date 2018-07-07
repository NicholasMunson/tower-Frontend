import React from 'react';

const Home = (props) => {
    console.log({props})
    return (
                    <div className='home-container'>
                        <p>Welcome to the home console</p>
                        <p>pie chart with ratio of beers to wine goes here</p>
                        <p>pie chart with ratio of beers to wine goes here</p>
                        <p>pie chart with ratio of beers to wine goes here</p>
                        <p>pie chart with ratio of beers to wine goes here</p>
                    </div>
        
                )
}

// class Home extends Component {
//     render() {
//         return (
//             <div className='home-container'>
//                 <p>Welcome to the home console</p>
//                 <p>pie chart with ratio of beers to wine goes here</p>
//                 <p>pie chart with ratio of beers to wine goes here</p>
//                 <p>pie chart with ratio of beers to wine goes here</p>
//                 <p>pie chart with ratio of beers to wine goes here</p>
//             </div>

//         )
//     }

// }
export default Home