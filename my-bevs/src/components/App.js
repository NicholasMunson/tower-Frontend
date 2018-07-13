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
import EditWinePost from './EditWinePost'
import '../styles/App.css'
import PieChartHome from './PieChartHome'
const URL = "https://mybevs.herokuapp.com" 

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            beerData:[],
            wineData:[],
            isLoaded: false,
            display:"a",
            currentBeer:{
            brewery:'',
            name:'',           
            style:'',            
            rating:'',
            ABV:'',          
            notes:'',
            id: ''
            }           
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

    handleDisplayChange = (display) => {
        this.setState({
            display: display
        })
        
    }

    handleDisplayChangeBack = () => {
        this.setState({
            display: "a"
        })
    }

    handleChange = (event) => {
    event.preventDefault()
    const key = event.target.name
    const value = event.target.value
        this.setState({
            currentBeer: {
                ...this.state.currentBeer,
                [key]: value
            }
        })
}

    updateBevCard = (beer) => {
        this.setState({
            currentBeer:{
            brewery: `${beer.brewery}`,
            name: `${beer.name}`,
            style: `${beer.style}`,
            rating: `${beer.rating}`,
            ABV: `${beer.ABV}`,
            notes: `${beer.notes}`,
            id: `${beer.id}`
            }
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

    handleUpdateBeerCard = (event, id) => {
        event.preventDefault()
        let updateUrl =`${URL}/beer/${id}`
        const data = new FormData(event.target)
        console.log(data.get("brewery"))

        fetch(updateUrl,{
            method:"PUT",
            body: JSON.stringify({
            brewery: data.get("brewery"),
            name: data.get("name"),
            style: data.get("style"),
            rating: data.get("rating"),
            ABV: data.get("ABV"),
            notes: data.get("notes") 
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        })
        .then(this.handleErrors)
        .catch(err => {
            console.error(err)
        })
        .then(this.dataSet)
    }   


    render() {
        const wines = this.state.wineData
        const beers = this.state.beerData
        const isLoaded = this.state.isLoaded 
        let currentBeer = this.state.currentBeer
        return (
            <Router>
                <React.Fragment> 
                    <div className='app-container'>
                        <Header />
                        <Route path='/home' component= { () => <Home beerData={beers} wineData={wines} isLoaded={isLoaded} component={ () => <PieChartHome beerData={beers} wineData={wines}/>}/>}/>  
                        <Route path='/about' component={About} />
                        <Route path='/beer-list' component={ () => (this.state.display === "a" ? <BeerList beerData={beers} handleDisplayChange={this.handleDisplayChange}  handleBeerDelete={this.handleBeerDelete} updateBevCard={this.updateBevCard} /> : <EditPost handleChange={this.handleChange} handleDisplayChangeBack={this.handleDisplayChangeBack} currentBeer={currentBeer} handleUpdateBeerCard={this.handleUpdateBeerCard}  /> ) } />
                        <Route path='/wine-list' component={ () => (this.state.display === "a" ? <WineList wineData={wines} handleDisplayChange={this.handleDisplayChange} />: <EditWinePost /> )} />
                        <Route path='/add' component={ () => <Add beerData={beers} beerToTop={this.beerToTop} /> } />
                    </div>
                        <Footer />
                </React.Fragment>
            </Router>
        )
    } 
    
}

export default App;
