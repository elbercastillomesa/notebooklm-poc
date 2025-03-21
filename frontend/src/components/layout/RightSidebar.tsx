"use client"

import { BrainCircuit, ChevronDown, ChevronRight, Cpu, Palette, Sparkles, SquareUserRound, Thermometer, Zap } from "lucide-react"
import { useState } from "react"
import Header from "./Header"

export default function RightSidebar({ promptObject, setPromptObject, validateForm, setValidateForm }) {

  const model_list = {
    "Flash": "gemini-2.0-flash-001", 
    "Standard": "gemini-2.0-flash-001",
    "Advanced": "gemini-2.0-flash-001"
  }

  const marketDetails = {
    "Canada": { country: "Canada", language: "French", currency: "CAD" },
    "Chile": { country: "Chile", language: "Spanish", currency: "CLP" },
    "Colombia": { country: "Colombia", language: "Spanish", currency: "COP" },
    "India": { country: "India", language: "English", currency: "INR" },
    "Pakistan": { country: "Pakistan", language: "English", currency: "PKR" },
    "Perú": { country: "Perú", language: "Spanish", currency: "PEN" },
    "United Kingdom": { country: "United Kingdom", language: "English", currency: "GBP" },
    "United States": { country: "United States", language: "English", currency: "USD" },
  };

  const [selectedTemplate, setSelectedTemplate] = useState("Enterprise SaaS")
  const [creativity, setCreativity] = useState("1")
  const [selectedModel, setSelectedModel] = useState(model_list["Standard"])
  const [isClientInfoOpen, setIsClientInfoOpen] = useState(true)
  const [isProposalOpen, setIsProposalOpen] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [isModelOpen, setIsModelOpen] = useState(true)

  return (
    <div className="w-100 bg-white dark:bg-black border-l border-gray-300 dark:border-gray-800 overflow-y-auto p-4">
      <Header />
      <div className="space-y-6">
        {/* Client Information Section */}
        <div>
          <div className="flex items-center mb-2 cursor-pointer" onClick={() => setIsClientInfoOpen(!isClientInfoOpen)}>
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
              {isClientInfoOpen ? <ChevronDown strokeWidth={4} className="h-3 w-3" /> : <ChevronRight strokeWidth={4} className="h-3 w-3" />}
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Client Information</h2>
            <SquareUserRound className="h-4 w-4 text-blue-400 ml-2" />
          </div>

          <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isClientInfoOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="space-y-2 p-1">
              <div>
                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Client Name</label>
                <input
                  type="text"
                  placeholder="Enter client company name"
                  value={promptObject.client_name}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-sm text-gray-900 dark:text-white placeholder-gray-500"
                  onChange={(e) => setPromptObject({ ...promptObject, client_name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Country</label>
                <div className="relative">
                  <select
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                    value={promptObject.country}
                    onChange={(e) => setPromptObject({ ...promptObject, country: e.target.value })}
                  >
                    <option>Select country</option>
                    {Object.keys(marketDetails).map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Currency</label>
                  <div className="relative">
                    <select
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                      value={promptObject.currency}
                      onChange={(e) => setPromptObject({ ...promptObject, currency: e.target.value })}
                    >
                      <option>Select currency</option>
                        {Object.values(marketDetails).map((market, index) => (
                        <option key={index} value={market.currency}>{market.currency}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Language</label>
                  <div className="relative">
                    <select
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                      value={promptObject.language}
                      onChange={(e) => setPromptObject({ ...promptObject, language: e.target.value })}
                    >
                      <option>Select language</option>
                        {[...new Set(Object.values(marketDetails).map((market) => market.language))].map((language, index) => (
                        <option key={index} value={language}>{language}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Proposal Template */}
        <div>
          <div className="flex items-center mb-2 cursor-pointer" onClick={() => setIsProposalOpen(!isProposalOpen)}>
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
              {isProposalOpen ? <ChevronDown strokeWidth={4} className="h-3 w-3" /> : <ChevronRight strokeWidth={4} className="h-3 w-3" />}
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Select Proposal Template</h2>
            <Sparkles className="h-4 w-4 text-blue-400 ml-2" />
          </div>

          <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isProposalOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="space-y-2 p-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="template"                  
                  checked={selectedTemplate === "Enterprise SaaS"}
                  onChange={() => setSelectedTemplate("Enterprise SaaS")}
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-600"
                  disabled
                />
                <span className="text-gray-900 dark:text-white">Technical Proposal</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="template"                  
                  checked={selectedTemplate === "Cloud Migration"}
                  onChange={() => setSelectedTemplate("Cloud Migration")}
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-600"
                  disabled
                />
                <span className="text-gray-900 dark:text-white">Request for RFP</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="template"                  
                  checked={selectedTemplate === "Consulting"}
                  onChange={() => setSelectedTemplate("Consulting")}
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-600"
                  disabled
                />
                <span className="text-gray-900 dark:text-white">Business Proposal</span>
              </label>
            </div>
          </div>
        </div>

        {/* SophiA Output Options */}
        <div>
          <div className="flex items-center mb-2 cursor-pointer" onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
              {isOptionsOpen ? <ChevronDown strokeWidth={4} className="h-3 w-3" /> : <ChevronRight strokeWidth={4} className="h-3 w-3" />}
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">SophiA Output Options</h2>
            <Zap className="h-4 w-4 text-purple-400 ml-2" />
          </div>

          <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOptionsOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="space-y-3 p-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">Extract Key Information</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" disabled />
                <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">Suggest Pricing</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">Include Sucess Stories</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" disabled checked />
                <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>
          </div>
          </div>
        </div>

        {/* Model Settings */}
        <div>
        <div className="flex items-center mb-2 cursor-pointer" onClick={() => setIsModelOpen(!isModelOpen)}>
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-xs mr-2">
            {isModelOpen ? <ChevronDown strokeWidth={4} className="h-3 w-3" /> : <ChevronRight strokeWidth={4} className="h-3 w-3" />}
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Model Settings</h2>
            <Cpu className="h-4 w-4 text-purple-400 ml-2" />
          </div>

          <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isModelOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="space-y-4 p-1">
            <div>
              <div className="flex items-center mb-2">
                <Cpu className="h-4 w-4 text-purple-400 mr-2" />
                <label className="text-sm text-gray-900 dark:text-white">Model</label>
              </div>
              <div className="relative">
                  <select
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none"
                  value={promptObject.model_name}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPromptObject({ ...promptObject, model_name: e.target.value })}
                  >
                    <option>Select model</option>
                    {Object.entries(model_list).map(([key, value], index) => (
                    <option key={index} value={value as string}>{key}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Palette className="h-4 w-4 text-purple-400 mr-2" />
                <label className="text-sm text-gray-900 dark:text-white">Creativity</label>
                <span className="ml-auto text-sm text-gray-900 dark:text-white">{promptObject.creativity}</span>
              </div>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={promptObject.creativity}
                  onChange={(e) => setPromptObject({ ...promptObject, creativity: e.target.value })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <BrainCircuit className="h-4 w-4 text-purple-400 mr-2" />
                <label className="text-sm text-gray-900 dark:text-white">Complexity</label>
                <span className="ml-auto text-sm text-gray-900 dark:text-white">{promptObject.max_output_tokens}</span>
              </div>
              <div className="flex items-center">
                <input
                  type="range"
                  min="3500"
                  max="8192"
                  step="1"
                  value={promptObject.max_output_tokens}
                  onChange={(e) => setPromptObject({ ...promptObject, max_output_tokens: e.target.value })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

