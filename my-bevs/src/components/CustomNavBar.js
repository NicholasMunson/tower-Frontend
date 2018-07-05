import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class CustomNavBar extends Component {
    render() {
        return (
            <div>
                <h1 className="my-bevs-title">
                    myBevs
                </h1>
                <Navbar default="default" collapseOnSelect="collapseOnSelect">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Drink Control</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight="pullRight">
                            <NavItem eventKey={1} componentClass={Link} href='/beer-list' to='/beer-list'>
                                BeerList
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} href='/wine-list' to='/wine-list'>
                                WineList
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} href='/about' to='/about'>
                                About
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }

}

export default CustomNavBar