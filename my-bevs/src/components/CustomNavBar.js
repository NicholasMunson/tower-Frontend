import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
class CustomNavBar extends Component {
    showSetting(event) {
        event.preventDefault()


    }
    render() {
        return (
            <div className='header-container'>
                <h1 className="my-bevs-title">
                    myBevs
                </h1>
                <Menu right >
                    <Nav pullRight="pullRight">
                        <NavItem eventKey={1} componentClass={Link} href='/beer-list' to='/beer-list'>
                            BeerList
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href='/wine-list' to='/wine-list'>
                            WineList
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href='/add' to='/add'>
                            Add Bevs
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href='/about' to='/about'>
                            About
                        </NavItem>
                    </Nav>
                </Menu>
            </div>
        )
    }

}

export default CustomNavBar
