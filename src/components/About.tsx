import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { default as data } from "../data.json";

export default function About() {
    const aboutData = data["About"];
    const pars = aboutData["body"].split("\n");
    return (
        <div>
            <br />
            <br />
            <br />
            <h1>Brett C. Denhart DMD, MD</h1>
            <hr />
            <div className="d-flex justify-content-around mt-5">
                <img className="headshot" src="/headshot.png" />
                <div style={{ width: "45%" }} >
                    {pars.map((p) => <p>{p}</p>)}
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}
