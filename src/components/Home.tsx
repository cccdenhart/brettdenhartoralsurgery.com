import React from 'react';
import Header from "./Header";
import Map from "./Map";
import Canvas from "./Canvas";
import { default as data } from "../data.json";
import { Jumbotron } from "react-bootstrap";

export default function Home() {
    const homeData = data["Home"];
    const mission: string = homeData["mission"];
    const pars: string[] = homeData["body"].split("\n");
    return (
        <div>
            <Canvas />
            <div className="container mt-5 home-text">
                <div className="row mb-5 home-mission">
                    <i className="ml-5">{mission}</i>
                </div>
                <Jumbotron className="row home-body">
                    {pars.map((p) => <p>{p}</p>)}
                </Jumbotron>
            </div>
            <Map />
        </div >
    )
}
