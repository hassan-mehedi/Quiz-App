import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./questions.style.scss";
import Question from "./question.component";

export default function Questions({ data, result, setResult }) {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [radioButtonValue, setRadioButtonValue] = useState("");
    const { question, answers, correct_answers } = data[count];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (radioButtonValue === "") {
            alert("Please select an answer");
        } else {
            let key = Object.keys(answers).find(
                (k) => answers[k] === radioButtonValue
            );
            if (correct_answers[`${key}_correct`]) {
                setResult(result + 1);
            }
            if (count < 9) {
                setCount(count + 1);
            }
            setRadioButtonValue("");
            if (count === 9) {
                navigate("/result");
            }
        }
    };

    // Filtering not null options
    const answersArray = Object.entries(answers);
    const notNullAnswers = answersArray.filter(
        ([key, value]) => value !== null
    );
    const filteredAnswers = Object.fromEntries(notNullAnswers);

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
