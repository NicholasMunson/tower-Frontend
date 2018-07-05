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
                    {/* <Route exact path='/' component={Header} /> */}
                    <Header />
                    {/* <CustomNavBar /> */}
                    <Route path='/about' component={About} />
                    <Route path='/beer-list' component={BeerList} />
                    <Route path='/wine-list' component={WineList} />
                    <Route path='/add' component={Add} />
                    {/* <Route exact path='/' component={Footer} /> */}
                    {/* <Footer /> */}
                    <p>This is the APP level</p>
                </div>
            </Router>
        )
    }
}

// function (){
//  return ( 
//  <h1>Hello</h1>
//  )
// }

export default App;
