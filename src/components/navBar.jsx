import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="fixed-top p-0">
            <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex align-items-center">
                    <Nav.Link as={Link} className="nav-link" to="/shopingCard">
                        <i className="fa fa-shopping-cart ml-1" aria-hidden="true"></i>
                        سبد خرید

                    </Nav.Link>

                    <Nav.Link as={Link} className="nav-link" to="/favorites">
                        <i className="fa fa-star-o ml-1" aria-hidden="true"></i>
                            علاقه مندی ها
                    </Nav.Link>

                    <NavLink className="nav-link" to="/home">
                        <NavDropdown title="صفحه اصلی" id="collasible-nav-dropdown" style={{ right: "0rem" }}>
                            <NavDropdown.Item componentClass='span'  style={{ textAlign: "right" }} href="#action/3.1">همه</NavDropdown.Item>
                            <NavDropdown.Item componentClass='span' style={{ textAlign: "right" }} href="#action/3.2">مناسب با پیتزا</NavDropdown.Item>
                            <NavDropdown.Item componentClass='span' style={{ textAlign: "right" }} href="#action/3.3">مناسب با استیک</NavDropdown.Item>
                        </NavDropdown>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
            {/* <Navbar.Brand href="#home">نوشیدنی ها</Navbar.Brand> */}
        </Navbar>
    );
}

export default NavBar;