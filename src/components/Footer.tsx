import React from "react";
import { Navbar } from "react-bootstrap";


export default function Footer() {
    return (
        <Navbar variant="dark" sticky="bottom" className="footer">
            <Navbar.Collapse className="justify-content-around">
                <Navbar.Text>
                    Brett C. Denhart DMD, MD
                </Navbar.Text>
                <Navbar.Text>
                    1066 Granby Road, Chicopee, MA 01020
                </Navbar.Text>
                <Navbar.Text>
                    413-534-4400
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
