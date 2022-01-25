import React from "react";
import "./results.style.scss";

export default function Results({ result, goHome }) {
    const percent = (result / 10) * 100;

    return (
        <div className="results">
            {result <= 5 ? (
                <p>You got less then {percent}% correct! Try again.</p>
            ) : (
                <p>Congratulations! You got {percent}% correct answers</p>
            )}
            <button onClick={goHome}>Home page</button>
        </div>
    );
}
