import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge'
import { getLocalStorage } from './common/handleLocalStorage'
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fixed-top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link as={Link} className="nav-link" to="/shopingCard">
                        <i className="fa fa-shopping-cart ml-1" aria-hidden="true"></i>
                        سبد خرید

                    </Nav.Link>

                    <Nav.Link as={Link} className="nav-link" to="/favorites">
                        <i className="fa fa-star-o ml-1" aria-hidden="true"></i>
                            علاقه مندی ها
                    </Nav.Link>
                    <Nav.Link as={Link} className="nav-link" to="/home">
                        <i className="fa fa-home ml-1" aria-hidden="true"></i>
                            صفحه اصلی
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home"> <h4 className="lead">beers</h4></Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;