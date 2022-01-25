import React from "react";

export default function Question({
    question,
    answers,
    setRadioButtonValue,
    handleSubmit,
}) {
    return (
        <div>
            <h2>{question}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="question-answers"
                            value={answers.answer_a}
                            onChange={(e) =>
                                setRadioButtonValue(e.target.value)
                            }
                            className="form-check-input"
                        />
                        {answers.answer_a}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="question-answers"
                            value={answers.answer_b}
                            onChange={(e) =>
                                setRadioButtonValue(e.target.value)
                            }
                            className="form-check-input"
                        />
                        {answers.answer_b}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="question-answers"
                            value={answers.answer_c}
                            onChange={(e) =>
                                setRadioButtonValue(e.target.value)
                            }
                            className="form-check-input"
                        />
                        {answers.answer_c}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="question-answers"
                            value={answers.answer_d}
                            onChange={(e) =>
                                setRadioButtonValue(e.target.value)
                            }
                            className="form-check-input"
                        />
                        {answers.answer_d}
                    </label>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
