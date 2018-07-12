import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import About from './About'
import BeerList from './BeerList'
import WineList from './WineList'
import Add from './Add'
import Footer from './Footer'
import Home from './Home'
import EditPost from './EditPost'
import '../styles/App.css'
import PieChartHome from './PieChartHome.js'
const URL = "https://mybevs.herokuapp.com" 

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            beerData:[],
            wineData:[],
            isLoaded: false,
            display: "a",
            brewery: "",
            name: "",
            style: "",
            rating: "",
            ABV: "",
            notes: ""
        }
    
    }
    componentDidMount = () => {
        this.dataSet()
    }

    dataSet = () => {
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

    handleBeerDelete = (event, id) =>{
        event.preventDefault()
        fetch(`${URL}/beer/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(response => response)
        .then(this.handleErrors)
        .then(this.dataSet())

    }

    handleErrors(response) {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response
    }
    beerToTop = (beerArray, addedBeer, response) => {
        beerArray.unshift(addedBeer)
        this.setState({
            beerData: beerArray
        })
        //without dataset() added beer goes to the top but has no key
    this.dataSet()
    }

    handleDisplayChange = (beer) => {
        this.setState({
            display: "b"
        })
        this.updateBevCard(beer)
    }

    handleDisplayChangeBack = () => {
        this.setState({
            display: "a"
        })
    }

    handleChange = (event) => {
        // event.preventDefault()
        const key = event.target.name
        const value = event.target.value  
        this.setState({
            [key]: value
        })
    }

    updateBevCard = (beer) => {
        this.setState({
            brewery: `${beer.brewery}`,
            name: `${beer.name}`,
            style: `${beer.style}`,
            rating: `${beer.rating}`,
            ABV: `${beer.ABV}`,
            notes: `${beer.notes}`
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const body = JSON.stringify(this.state)

        fetch("https://mybevs.herokuapp.com/beer", {
            method: "PUT",
            body: body,
            headers: new Headers({"content-type": "application/json"})
        })
            .then(response => response.json())
            .then(res => {
                let beerArray = this.props.beerData
                let addedBeer = this.state
                let giveKey = (addedBeer.key = res.Posted.id)
                console.log(addedBeer.key);
                // trying to set key to id
                console.log(giveKey);
                this
                    .props
                    .beerToTop(beerArray, addedBeer, res.Posted)
            })
            .catch(err => {
                console.error(err)
            })

        }


    render() {
        const wines = this.state.wineData
        const beers = this.state.beerData
        const isLoaded = this.state.isLoaded 
        let props = this.state
        return (
            <Router>
                <React.Fragment> 
                    <div className='app-container'>
                        <Header />
                        <Route path='/home' component= { () => <Home beerData={beers} wineData={wines} isLoaded={isLoaded} component={ () => <PieChartHome beerData={beers} wineData={wines}/>}/>}/>  
                        <Route path='/about' component={About} />
                        <Route path='/beer-list' component={ () => ( this.state.display === "a" ? <BeerList beerData={beers} handleDisplayChange={this.handleDisplayChange}  handleBeerDelete={this.handleBeerDelete} /> : <EditPost handleChange={this.handleChange} handleDisplayChangeBack={this.handleDisplayChangeBack} props={props} /> ) } />
                        <Route path='/wine-list' component={ () => <WineList wineData={wines} />} />
                        <Route path='/add' component={ () => <Add beerData={beers} beerToTop={this.beerToTop} /> } />
                    </div>
                        <Footer />
                </React.Fragment>
            </Router>
        )
    } 
    
}

export default App;
