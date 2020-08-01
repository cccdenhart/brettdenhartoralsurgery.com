import React from "react";
import Map from "./Map";
import { Container, Row, Col } from "react-bootstrap";


export function ContactInfo() {
    return (
        <div>
            <div className="justify-content-around">
                <h2>Address</h2>
                <a href="https://www.google.com/maps/place/1066+Granby+Rd,+Chicopee,+MA+01020/@42.1721203,-72.5919533,17z/data=!3m1!4b1!4m5!3m4!1s0x89e6ddb83e855f4b:0xe1e18a3a746a86e4!8m2!3d42.1721203!4d-72.5897646">
                    1066 Granby Road <br />
                    Chicopee, MA 01020
                </a>
            </div>
            <br />
            <div className="justify-content-around">
                <h2>Phone Number</h2>
                <a href="tel:4135344400">(413) 534-4400</a>
            </div>
        </div>
    )
}

export default function Contact() {
    return (
        <section id="contactus">
            <Container>
                <Row>
                    <Col sm="12">
                        <h1 style={{ marginTop: "10vh" }}>Contact Us</h1>
                        <hr />
                    </Col>
                </Row>
                <Row style={{ marginTop: "5vh" }}>
                    <Col sm="8">
                        <div className="contact-map"><Map /></div>
                    </Col>
                    <Col sm="4">
                        <div style={{ marginTop: "30%" }}>
                            <ContactInfo />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
