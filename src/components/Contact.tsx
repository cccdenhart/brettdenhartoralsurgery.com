import React from "react";
import Map from "./Map";
import { Container, Row, Col } from "react-bootstrap";

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
                        <div style={{ marginTop: "30%" }}
                            className="justify-content-around"
                        >
                            <h2>Address</h2>
                            <p>1066 Granby Road</p>
                            <p>Chicopee, MA 01020</p>
                        </div>
                        <br />
                        <div className="justify-content-around">
                            <h2>Phone Number</h2>
                            <a href="tel:4135344400">(413) 534-4400</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
