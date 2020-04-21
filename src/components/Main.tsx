import React from "react";
import Home from "./Home";
import About from "./About";
import Meet from "./Meet";
import Procedures from "./Procedures";
import Contact from "./Contact";
import { Nav, Navbar } from "react-bootstrap";
import { default as data } from "../data.json";

export function Header() {
    const pages: string[] = Object.keys(data);
    return (
        <Navbar fixed="top" className="header" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-around">
                {pages.map((p) =>
                    <Nav.Link href={"#" + p.toLowerCase().replace(/\s/g, '')}
                        className="navlink"> {p}</Nav.Link>)
                }
            </Navbar.Collapse>
        </Navbar >
    );
}

export function Footer() {
    return (
        <Navbar variant="dark" fixed="bottom" className="footer">
            <Navbar.Collapse
                id="basic-navbar-nav"
                className="d-flex justify-content-around"
            >
                <Navbar.Text>
                    Brett C. Denhart DMD, MD
                </Navbar.Text>
                <Navbar.Text>
                    1066 Granby Road, Chicopee, MA 01020
                </Navbar.Text>
                <Navbar.Text>
                    <a href="tel:4135344400">(413) 534-4400</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export function Main() {
    return (
        <div>
            <Home />
            <About />
            <Meet />
            <Procedures />
            <Contact />
        </div>
    );
}

