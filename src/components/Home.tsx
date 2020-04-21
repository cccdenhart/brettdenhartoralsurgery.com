import React from 'react';
import Map from "./Map";
import { default as data } from "../data.json";
import { Carousel, Container, Row, Col } from "react-bootstrap";

function Canvas() {
    return (
        <Row className="canvas m-0">
            <Carousel>
                <Carousel.Item>
                    <img src={"/pioneer_valley.jpg"} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"/winter.jpg"} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"/waterfall.jpg"} />
                </Carousel.Item>
            </Carousel>
            <div className="canvas-text">
                <h1 style={{ fontSize: "3.5em" }}>
                    Brett C. Denhart DMD, MD
                </h1>
                <p style={{ fontSize: "1.5em" }}>
                    Providing Oral Maxillofacial Surgery and Dental Implants Since 2002
                </p>
            </div>
        </Row>
    );
}

export default function Home() {
    const homeData = data["Home"];
    const mission: string = homeData["mission"];
    return (
        <div id="home">
            <Canvas />
            <div className="body">
                <div className="mission">
                    <div style={{ marginLeft: "2em" }}>
                        <p>{mission}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
