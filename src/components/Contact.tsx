import React from "react";
import Map from "./Map";

export default function Contact() {
    return (
        <div>
            <br />
            <br />
            <br />
            <h1>Contact Us</h1>
            <hr />
            <br />
            <div className="d-flex justify-content-around mtb-5">
                <div className="contact-map"><Map /></div>
                <div className="contact-text mr-5">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>1066 Granby Road</h3>
                    <h3>Chicopee, MA 01020</h3>
                    <br />
                    <h3>413-534-4400</h3>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
