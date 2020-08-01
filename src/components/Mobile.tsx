import React from 'react';
import { default as data } from "../data.json";
import { ContactInfo } from "./Contact";
import { Title } from "./Home";


export default function Mobile() {
    const aboutData = data["About"]
    const pars: string[] = aboutData["body"].split("\n");
    return (
        <div>
            <br />
            <h1>Brett Denhart DMD</h1>
            <br />
            {pars.map((p) => <p>{p}</p>)}
            <br />
            <ContactInfo />
        </div>
    )
}
