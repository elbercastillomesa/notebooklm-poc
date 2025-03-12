"use client"

import { Mic, Send, Upload } from "lucide-react"
import { useState, useEffect } from "react"
import ProgressSteps from "./ProgressSteps"
import ProposalCards from "./ProposalCards"
import ContentCards from "./ContentCards"
import TextArea from "./TextArea"

export default function MainContent( { promptObject, setPromptObject } ) {

  const [inputValue, setInputValue] = useState("")

  const [promptText, setPromptText] = useState("")

  const [chatHistory, setChatHistory] = useState([])

  /**
   * esto va a guardar un array de objetos. el objeto va a tener dos propiedades,
   * una es el mensaje y la otra es el autor del mensaje (isBot: true or false)
   * 
   * 
   * una funcion que actualize cuando el usuario ingrese text
   * 
   * una funcion que actualize cuando el api responda (bot)
   * 
   * y va actualizando el chatHistory (setChatHistory) con los mensajes
   * 
   */

  const updateChatHistory = ((message, isBot) => {

  })

  useEffect(() => {

    const prompt = {
      ...promptObject,
      prompt: promptText,
    }
    
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('https://sophia5-api-839756415189.us-east4.run.app/generate-proposal',
        
      {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "accept": "*/*",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          },
          body: JSON.stringify(prompt),
        }
      );
      
      // convert the data to json
      const json = await data.json();
  
      // set state with the result
      //setData(json);
      console.log(json)
    }
  
    // call the function
    if (promptText !== "")
      fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [promptText])


  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 overflow-y-auto p-4">
      <ProgressSteps />

      
      <ContentCards />
      {/* <TextArea /> */}

      <div className="mt-auto max-w-4xl w-full mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Type something"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 pr-24 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <Mic className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <Upload className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setPromptText(inputValue)} >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

