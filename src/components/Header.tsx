import React from "react";
import { Link, NavLink } from "react-router-dom"
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar
            fixed="top"
            variant="dark"
            expand="lg"
            className="header d-flex justify-content-around"
        >
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/procedures">Procedures</Nav.Link>
                    <Nav.Link as={NavLink} to="/schedule">Schedule</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
