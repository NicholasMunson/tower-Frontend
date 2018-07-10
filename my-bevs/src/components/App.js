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
import PieChartHome from './PieChartHome.js'
const URL = "https://mybevs.herokuapp.com" 

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            beerData:[],
            wineData:[],
            isLoaded: false
        }
    
    }
    componentDidMount = () => {
        fetch(`${URL}/beer`)
        .then(response => response.json())
        .then(beer => {
            this.setState({
                beerData:beer.beer
            })
        })
        fetch(`${URL}/wine`)
        .then(response => response.json())
        .then(wine => this.setState({
            wineData:wine.wine
        }))

    }

    handleBeerDelete(event, id){
        event.preventDefault()
        console.log(id)

    }

    render() {
        const wines = this.state.wineData
        const beers = this.state.beerData
        const isLoaded = this.state.isLoaded 
        
        return (
            <Router>
                <React.Fragment> 
                    <div className='app-container'>
                        <Header />
                        <Route path='/home' component= { () => <Home beerData={beers} wineData={wines} isLoaded={isLoaded} component={ () => <PieChartHome beerData={beers} wineData={wines}/>}/>}/>  
                        <Route path='/about' component={About} />
                        <Route path='/beer-list' component={ () =>  <BeerList beerData={beers} handleBeerDelete={this.handleBeerDelete}  />} />
                        <Route path='/wine-list' component={ () => <WineList wineData={wines} />} />
                        <Route path='/add' component={Add} />
                    </div>
                        <Footer />
                </React.Fragment>
            </Router>
        )
    } 
    
}

export default App;
