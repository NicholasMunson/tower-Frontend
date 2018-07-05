import React, {Component} from 'react';
import Nav from './CustomNavBar'

class Header extends Component {
    render() {
        return ( 
            <div className='nav-container'>
            <p>myBevs</p>
            <Nav />
        </div>
            
        )
    }
    
}
export default Header

