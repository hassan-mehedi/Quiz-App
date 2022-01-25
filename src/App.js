import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Setup from "./components/setup/setup.component";
import Questions from "./components/questions/questions.component";
import Results from "./components/results/results.component";

function App() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        limit: 10,
        category: "Linux",
        language: "PHP",
        difficulty: "easy",
    });
    const [data, setData] = useState([]);
    const [result, setResult] = useState(0);

    const formHandler = async (e) => {
        e.preventDefault();
        const { limit, category, language, difficulty } = e.target;

        setFormData({
            ...formData,
            limit: limit.value,
            category: category.value,
            language: language.value,
            difficulty: difficulty.value,
        });

        const response =
            formData.category === "Programming "
                ? await fetch(
                      `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&limit=${formData.limit}&tags=${formData.language}&difficulty=${formData.difficulty}`
                  )
                : await fetch(
                      `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&limit=${formData.limit}&category=${formData.category}&difficulty=${formData.difficulty}`
                  );

        const data = await response.json();
        setData(data);
        navigate("/questions");
    };
    return (
        <main className="App">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Setup
                            formHandler={formHandler}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    }
                ></Route>
                <Route
                    exact
                    path="/questions"
                    element={
                        <Questions
                            data={data}
                            result={result}
                            setResult={setResult}
                        />
                    }
                ></Route>
                <Route
                    exact
                    path="/result"
                    element={<Results result={result} />}
                ></Route>
            </Routes>
        </main>
    );
}

export default App;
