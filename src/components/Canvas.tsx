import React from "react";


export default function Canvas() {
    return (
        <div className="canvas">
            <img style={{ width: "100%" }} src={"/pioneer_valley.jpg"} alt="Pioneer Valley" />
            <div className="canvas-text">
                <h1>Brett C. Denhart DMD, MD</h1>
                <p>Providing Oral Maxillofacial Surgery and Dental Implants Since 2002</p>
            </div>
        </div>
    );
}
