import React from "react";
import "./results.style.scss";

export default function Results({ result }) {
    return (
        <div className="results">
            <h1>{result}</h1>
        </div>
    );
}
