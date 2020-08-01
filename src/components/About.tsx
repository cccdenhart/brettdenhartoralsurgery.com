import React from "react";
import { default as data } from "../data.json";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

export default function About() {
    const aboutData = data["About"]
    const pars: string[] = aboutData["body"].split("\n");
    return (
        <section id="about">
            <Container style={{ width: "80%" }}>
                <Row>
                    <Col>
                        <h1 style={{ marginTop: "10vh" }}>About</h1>
                        <hr />
                        <Jumbotron className="body">
                            {pars.map((p) => <p>{p}</p>)}
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
