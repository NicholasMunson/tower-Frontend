import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import '../styles/hamburger.css'
class CustomNavBar extends Component {

    render() {
        return (
            <div className='header-container right'>
                <Menu right >
                    <Nav pullRight>
                    <NavItem 
                            eventKey={0} 
                            componentClass={Link} 
                            href='/home' 
                            to='/home' 
                            className='nav-item'>                 
                            Home
                        </NavItem>
                        <NavItem 
                            eventKey={1} 
                            componentClass={Link} 
                            href='/beer-list' 
                            to='/beer-list' 
                            className='nav-item'>                          
                            BeerList
                        </NavItem>
                        <NavItem 
                            eventKey={2} 
                            componentClass={Link} 
                            href='/wine-list' 
                            to='/wine-list' 
                            className='nav-item'>
                            WineList
                        </NavItem>
                        <NavItem 
                            eventKey={3} 
                            componentClass={Link} 
                            href='/add' to='/add' 
                            className='nav-item'>
                            Add-Bevs
                        </NavItem>
                        <NavItem eventKey={4}
                            componentClass={Link} 
                            href='/about' 
                            to='/about' 
                            className='nav-item'>
                            About
                        </NavItem>
                    </Nav>
                </Menu>
            </div>
        )
    }

}

export default CustomNavBar
