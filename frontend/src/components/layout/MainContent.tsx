"use client"

import { Mic, Send, Upload } from "lucide-react"
import { useState, useEffect } from "react"
import ProgressSteps from "./ProgressSteps"
import ContentCards from "./ContentCards"
import TextArea from "./TextArea"

export default function MainContent({ promptObject, setPromptObject, validateForm, setValidateForm }) {

  const [inputValue, setInputValue] = useState("")

  const [promptText, setPromptText] = useState("")

  const [chatHistory, setChatHistory] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        consumeAPI();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [promptText, promptObject]);


  const fetchData = async (prompt) => {
    // get the data from the api
    const data = await fetch('https://sophia5-api-839756415189.us-east4.run.app/generate-word-from-proposal',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "accept": "*/*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
        body: JSON.stringify(prompt),
      }
    );

    const json = await data.json();
    return json;
  }

  function consumeAPI() {

    if (promptText === "") {
      // document.querySelector('input').classList.add('border-red-500', 'dark:border-red-500', 'text-red-900', 'placeholder-red-700', 'focus:border-red-500', 'focus:ring-red-500', 'dark:focus:border-red-500', 'dark:focus:ring-red-500');
      // console.error("Please enter a prompt");
      return;
    }

    if (promptObject.client_name === "" || promptObject.country === "" ||
      promptObject.currency === "" || promptObject.language === "") {
      //console.error("Please add the details");
      setValidateForm(true)
      return;
    }

    const prompt = { ...promptObject, prompt: promptText }
    setChatHistory(chatHistory => [...chatHistory, { text: promptText, isBot: false }]);
    setPromptText("");
    setIsLoading(true);

    fetchData(prompt).then((response) => {
      setIsLoading(false);
      setChatHistory(chatHistory => [...chatHistory, { text: response.proposal, isBot: true }]);
    });
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 overflow-y-auto p-4">
      <ProgressSteps />

      {chatHistory.length < 1 ? <ContentCards /> : <TextArea chatHistory={chatHistory} isLoading={isLoading} />}

      <div className="mt-auto max-w-4xl w-full mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Type something..."
            value={promptText}
            required
            onChange={(e) => setPromptText(e.target.value)}
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 pr-24 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <Mic className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <Upload className="h-4 w-4" />
            </button>
            <button
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => consumeAPI()}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

