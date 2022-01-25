import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./questions.style.scss";
import Question from "./question.component";

export default function Questions({ data }) {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [radioButtonValue, setRadioButtonValue] = useState("");
    const [result, setResult] = useState(0);
    const { question, answers, correct_answer } = data[count];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (radioButtonValue === "") {
            alert("Please select an answer");
        } else {
            console.log(radioButtonValue);
            if (count < 9) {
                setCount(count + 1);
            }
            setRadioButtonValue("");
            if (radioButtonValue === correct_answer) {
                setResult(result + 1);
            }
            if (count === 9) {
                alert(
                    "You have reached the end of the quiz. Your score is " +
                        result +
                        "/10"
                );
                navigate("/");
            }
        }
    };

    // Filtering not null options
    const answersArray = Object.entries(answers);
    const notNullAnswers = answersArray.filter(
        ([key, value]) => value !== null
    );
    const filteredAnswers = Object.fromEntries(notNullAnswers);

    console.log(filteredAnswers);
    return (
        <div className="questions">
            <Question
                key={question.id}
                question={question}
                answers={filteredAnswers}
                radioButtonValue={radioButtonValue}
                setRadioButtonValue={setRadioButtonValue}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}
