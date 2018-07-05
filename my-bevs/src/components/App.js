import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import About from './About'
import BeerList from './BeerList'
import WineList from './WineList'
import Add from './Add'
import Footer from './Footer'
import CustomNavBar from './CustomNavBar'
import '../styles/App.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className='app-container'>
                    <Header />
                    <Route path='/about' component={About} />
                    <Route path='/beer-list' component={BeerList} />
                    <Route path='/wine-list' component={WineList} />
                    <Route path='/add' component={Add} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;
