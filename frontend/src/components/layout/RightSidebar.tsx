"use client"

import { Check, ChevronDown, Cpu, Sparkles, Thermometer, Zap } from "lucide-react"
import { useState } from "react"

export default function RightSidebar( { promptObject, setPromptObject } ) {

  const model_list = ["gemini-2.0-flash-001", "Gemini 2.0", "GPT-4", "Claude 3" ]
  const country_list = ["United States", "Canada", "United Kingdom"]
  const currency_list = ["USD", "EUR", "GBP"]
  const language_list = ["English", "Spanish", "French"]

  const [selectedTemplate, setSelectedTemplate] = useState("Enterprise SaaS")
  const [temperature, setTemperature] = useState("1")
  const [selectedModel, setSelectedModel] = useState(model_list[0])

  return (
    <div className="w-80 bg-white dark:bg-black border-l border-gray-300 dark:border-gray-800 overflow-y-auto p-4">
      <div className="space-y-6">
        {/* Client Information Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
              <Check className="h-3 w-3" />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Client Information</h2>
            <Sparkles className="h-4 w-4 text-blue-400 ml-2" />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Client Name</label>
              <input
                type="text"
                placeholder="Enter client company name"
                value={promptObject.nombre_cliente}
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-sm text-gray-900 dark:text-white placeholder-gray-500"
                onChange={ (e) => setPromptObject( { ...promptObject, nombre_cliente : e.target.value } ) }
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Country</label>
              <div className="relative">
                <select 
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                  value={promptObject.pais}
                  onChange={ (e) => setPromptObject( { ...promptObject, pais : e.target.value } ) }
                >
                    <option>Select country</option>
                    {country_list.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Currency</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                    value={promptObject.moneda}
                    onChange={ (e) => setPromptObject( { ...promptObject, moneda : e.target.value } ) }  
                  >
                    <option>Select currency</option>
                    {currency_list.map((currency, index) => (
                      <option key={index} value={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Language</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                    // onChange={ (e) => setPromptObject( { ...promptObject, moneda : e.target.value } ) }  
                  >
                    <option>Select language</option>
                    {language_list.map((language, index) => (
                      <option key={index} value={language}>{language}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Proposal Template */}
        <div>
          <div className="flex items-center mb-4">
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
              <Check className="h-3 w-3" />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Select Proposal Template</h2>
            <Sparkles className="h-4 w-4 text-blue-400 ml-2" />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTemplate === "Enterprise SaaS"}
                onChange={() => setSelectedTemplate("Enterprise SaaS")}
                className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-600"
              />
              <span className="text-gray-900 dark:text-white">Enterprise SaaS</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTemplate === "Cloud Migration"}
                onChange={() => setSelectedTemplate("Cloud Migration")}
                className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-600"
              />
              <span className="text-gray-900 dark:text-white">Cloud Migration</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTemplate === "Consulting"}
                onChange={() => setSelectedTemplate("Consulting")}
                className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-600"
              />
              <span className="text-gray-900 dark:text-white">Consulting</span>
            </label>
          </div>
        </div>

        {/* SophiA Output Options */}
        <div>
          <div className="flex items-center mb-4">
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
              <Check className="h-3 w-3" />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">SophiA Output Options</h2>
            <Zap className="h-4 w-4 text-purple-400 ml-2" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">Extract Key Information</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">Suggest Pricing</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">Include Case Studies</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Model Settings */}
        <div>
          <div className="flex items-center mb-4">
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
              <Check className="h-3 w-3" />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Model Settings</h2>
            <Cpu className="h-4 w-4 text-purple-400 ml-2" />
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center mb-2">
                <Cpu className="h-4 w-4 text-purple-400 mr-2" />
                <label className="text-sm text-gray-900 dark:text-white">Model</label>
              </div>
              <div className="relative">
                <select 
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                  onChange={ (e) => setPromptObject( { ...promptObject, model_name : e.target.value } ) }
                >
                    {model_list.map((model, index) => (
                    <option key={index} value={model}>{model}</option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Thermometer className="h-4 w-4 text-purple-400 mr-2" />
                <label className="text-sm text-gray-900 dark:text-white">Temperature</label>
                <span className="ml-auto text-sm text-gray-900 dark:text-white">{promptObject.temperature}</span>
              </div>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={promptObject.temperature}
                  onChange={ (e) => setPromptObject( { ...promptObject, temperature : e.target.value } ) }
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Zap className="h-4 w-4 text-purple-400 mr-2" />
                <label className="text-sm text-gray-900 dark:text-white">Token Limit</label>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="100" 
                  max="8192" 
                  value={promptObject.max_output_tokens}
                  onChange={ (e) => setPromptObject( { ...promptObject, max_output_tokens : e.target.value } ) }
                  className="w-16 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-1 px-2 text-sm text-center text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

