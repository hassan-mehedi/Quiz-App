import React from "react";
import "./question.style.scss";

export default function Question({
    question,
    answers,
    radioButtonValue,
    setRadioButtonValue,
    handleSubmit,
}) {
    return (
        <div>
            <h2>{question}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                {answers.hasOwnProperty("answer_a") && (
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="question-answers"
                                value={answers.answer_a}
                                onChange={(e) =>
                                    setRadioButtonValue(e.target.value)
                                }
                                checked={radioButtonValue === answers.answer_a}
                                className="form-check-input"
                            />
                            {answers.answer_a}
                        </label>
                    </div>
                )}

                {answers.hasOwnProperty("answer_b") && (
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="question-answers"
                                value={answers.answer_b}
                                onChange={(e) =>
                                    setRadioButtonValue(e.target.value)
                                }
                                checked={radioButtonValue === answers.answer_b}
                                className="form-check-input"
                            />
                            {answers.answer_b}
                        </label>
                    </div>
                )}

                {answers.hasOwnProperty("answer_c") && (
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="question-answers"
                                value={answers.answer_c}
                                onChange={(e) =>
                                    setRadioButtonValue(e.target.value)
                                }
                                checked={radioButtonValue === answers.answer_c}
                                className="form-check-input"
                            />
                            {answers.answer_c}
                        </label>
                    </div>
                )}

                {answers.hasOwnProperty("answer_d") && (
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="question-answers"
                                value={answers.answer_d}
                                onChange={(e) =>
                                    setRadioButtonValue(e.target.value)
                                }
                                checked={radioButtonValue === answers.answer_d}
                                className="form-check-input"
                            />
                            {answers.answer_d}
                        </label>
                    </div>
                )}

                <button className="btn" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}
