import React from "react";
import { default as data } from "../data.json";
import { Jumbotron, Container, Row, Col, Modal } from "react-bootstrap";

export default function About() {
    const meetData = data["Meet Us"];
    const pars = meetData["body"].split("\n");
    return (
        <section id="meetus" className="mt-5">
            <Container>
                <Row>
                    <Col sm="12">
                        <h1 style={{ marginTop: "10vh" }}>
                            Brett C. Denhart DMD, MD
                    </h1>
                        <hr />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm="6">
                        <img className="headshot" src="/headshot.png" />
                    </Col>
                    <Col sm="6" style={{ height: "60vh" }}>
                        {pars.map((p) => <p>{p}</p>)}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
