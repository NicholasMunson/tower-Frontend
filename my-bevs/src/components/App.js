import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import About from './About'
import BeerList from './BeerList'
import WineList from './WineList'
import Add from './Add'
import Footer from './Footer'
import Home from './Home'
import '../styles/App.css'
const URL = "https://mybevs.herokuapp.com" 

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            beerData:[],
            wineData:[]
        }
    
    }
    componentWillMount = () => {
        fetch(`${URL}/beer`)
        .then(response => response.json())
        .then(beer => {
            this.setState({
                beerData:beer
            })
        }),
        fetch(`${URL}/wine`)
        .then(response => response.json())
        .then(wine => this.setState({
            wineData:wine.wine
        }))

    }

    
    
    render() {
        const wines = this.state.wineData
        const beers = this.state.beerData.beer
        // console.log(wines);
        
        return (
            <Router>
                <div className='app-container'>
                    {/* {this.state.wineData.map(wines => console.log(wines.style))} */}
                    <Header />
                    <Route path='/home' component= { () => <Home beerData={beers} wineData={wines}/>}/>  
                    <Route path='/about' component={About} />
                    <Route path='/beer-list' component={ () =>  <BeerList beerData={beers}  />} />
                    <Route path='/wine-list' component={ () => <WineList wineData={wines} />} />
                    <Route path='/add' component={Add} />
                    <Footer />
                </div>
            </Router>
        )
    } 
    
}

export default App;
