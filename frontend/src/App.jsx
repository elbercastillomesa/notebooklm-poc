import { useState } from "react";
import { generateResponse } from "./api/gemini";

function App() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleGenerate = async () => {
        const result = await generateResponse(prompt);
        setResponse(result);
    };

    return (
        <div>
            <h1>NotebookLM Clone</h1>
            <textarea onChange={(e) => setPrompt(e.target.value)} />
            <button onClick={handleGenerate}>Generate</button>
            <p>{response}</p>
        </div>
    );
}

export default App;

