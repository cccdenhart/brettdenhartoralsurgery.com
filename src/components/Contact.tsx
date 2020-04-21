import React from "react";
import Map from "./Map";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
    return (
        <div className="contactus">
            <hr id="contactus" style={{ width: "0vw" }} />
            <h1 style={{ marginTop: "10vh" }}>Contact Us</h1>
            <hr />
            <div className="body d-flex justify-content-around">
                <div className="contact-map"><Map /></div>
                <Container className="contact-text">
                    <Row>
                        <Col className="contact-title">
                            <h2>Address</h2>
                        </Col>
                        <Col>
                            <p>1066 Granby Road</p>
                            <p>Chicopee, MA 01020</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "5vh" }}>
                        <Col className="contact-title"><h2>Phone Number</h2></Col>
                        <Col><a href="tel:4135344400">(413) 534-4400</a></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
