import React from "react";
import { Component } from "react";
import Home from "./Home";
import About from "./About";
import Meet from "./Meet";
import Procedures from "./Procedures";
import Contact from "./Contact";
import { Nav, Navbar } from "react-bootstrap";
import { default as data } from "../data.json";
import { Link } from "react-scroll";

export function Header() {
    const pages: string[] = Object.keys(data);
    return (
        <Navbar variant="dark" fixed="top" className="header" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="nav-body m-auto">
                    {pages.map((p) =>
                        <Nav.Item><Nav.Link><Link
                            to={p.toLowerCase().replace(/\s/g, '')}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            {p}
                        </Link></Nav.Link></Nav.Item>)
                    }
                </Nav>
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

interface Props { };

interface State {
    page_idx: number
};

export class Main extends Component<Props, State> {
    pages: JSX.Element[] = [
        <Home />,
        <About />,
        <Meet />,
        <Procedures />,
        <Contact />
    ];

    state: State = {
        page_idx: 0
    }


    componentDidMount() {
        window.addEventListener('scroll', this.switchPage);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.switchPage);
    }

    switchPage = () => {
        const scroll: number = window.scrollY;
        console.log(scroll);
        const choosePage = (scroll: number, idx: number): number => {
            if ((idx === 0 && scroll < 0) ||
                (idx === (this.pages.length - 1))) {
                return idx;
            }
            return idx + ((scroll > 0) ? 1 : (-1));
        }
        this.setState((state: State) => ({
            page_idx: choosePage(scroll, state.page_idx)
        }));
    }

    render() {
        return (
            <div>
                {this.pages[this.state.page_idx]}
            </div>
        );
    }
}

