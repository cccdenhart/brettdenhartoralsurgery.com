import React from "react";
import { default as data } from "../data.json";
import { Jumbotron } from "react-bootstrap";

export default function About() {
    const aboutData = data["About"]
    const pars: string[] = aboutData["body"].split("\n");
    return (
        <div className="about">
            <hr id="about" style={{ width: "0vh" }} />
            <h1 style={{ marginTop: "10vh" }}>About</h1>
            <hr />
            <Jumbotron className="body">
                {pars.map((p) => <p>{p}</p>)}
            </Jumbotron>
        </div >
    );
}
