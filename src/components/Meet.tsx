import React from "react";
import { default as data } from "../data.json";

export default function About() {
    const meetData = data["Meet Us"];
    const pars = meetData["body"].split("\n");
    return (
        <div className="meetus">
            <hr id="meetus" style={{ width: "0vw" }} />
            <h1 style={{ marginTop: "10vh" }}>
                Brett C. Denhart DMD, MD
            </h1>
            <hr />
            <div className="body d-flex justify-content-around mt-5">
                <img className="headshot" src="/headshot.png" />
                <div style={{ width: "45vw" }} >
                    {pars.map((p) => <p>{p}</p>)}
                </div>
            </div>
        </div>
    );
}
