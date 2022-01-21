import React, { useState } from "react";
import "./setup.style.scss";

export default function Setup() {
    const [categoryProgramming, setCategoryProgramming] = useState(true);
    const [formData, setFormData] = useState({
        limit: 10,
        category: "Linux",
        language: "PHP",
        difficulty: "easy",
    });

    const formHandler = (e) => {
        e.preventDefault();
        const { limit, category, language, difficulty } = e.target;
        console.log(
            limit.value,
            category.value,
            language.value,
            difficulty.value
        );
        setFormData({
            ...formData,
            limit: limit.value,
            category: category.value,
            language: language.value,
            difficulty: difficulty.value,
        });
        console.log(formData);
    };
    return (
        <div id="setup">
            <form onSubmit={(e) => formHandler(e)}>
                <h1>Setup Quiz</h1>

                <label htmlFor="limit">Number of questions</label>
                <input
                    type="number"
                    name="limit"
                    onChange={(e) => {
                        setFormData({ ...formData, limit: e.target.value });
                    }}
                    value={formData.limit}
                />

                <label htmlFor="category">Catergory</label>
                <select
                    name="category"
                    id="category"
                    onChange={(e) => {
                        if (e.target.value === "Programming ") {
                            setCategoryProgramming(false);
                        } else {
                            setCategoryProgramming(true);
                        }
                        setFormData({ ...formData, category: e.target.value });
                    }}
                >
                    <option value="Linux">Linux</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Networking">Networking</option>
                    <option value="Programming ">Programming </option>
                    <option value="Cloud">Cloud</option>
                    <option value="Docker">Docker</option>
                    <option value="Kubernetes">Kubernetes</option>
                </select>

                <label htmlFor="tags">Choose Language</label>
                <select
                    name="language"
                    id="language"
                    disabled={categoryProgramming}
                    onChange={(e) => {
                        setFormData({ ...formData, language: e.target.value });
                    }}
                >
                    <option value="PHP">PHP</option>
                    <option value="JS">JS</option>
                    <option value="Python">Python</option>
                    <option value="Laravel">Laravel</option>
                </select>

                <label htmlFor="difficulty">Difficulty</label>
                <select
                    name="difficulty"
                    id="difficulty"
                    onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                    }
                >
                    <option value="easy">easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <button type="submit" id="submit">
                    Start
                </button>
            </form>
        </div>
    );
}
