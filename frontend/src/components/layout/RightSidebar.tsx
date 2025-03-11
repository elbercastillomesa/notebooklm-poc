"use client"

import { Check, ChevronDown, Cpu, Sparkles, Thermometer, Zap } from "lucide-react"
import { useState } from "react"

export default function RightSidebar() {
  const [selectedTemplate, setSelectedTemplate] = useState("Enterprise SaaS")
  const [temperature, setTemperature] = useState("1")
  const [tokenLimit, setTokenLimit] = useState("190")

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
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-sm text-gray-900 dark:text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Country</label>
              <div className="relative">
                <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none">
                  <option>Select country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Currency</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none">
                    <option>Select currency</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Language</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none">
                    <option>Select language</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
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
                <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm text-gray-900 dark:text-white appearance-none">
                  <option>Gemini 2.0</option>
                  <option>GPT-4</option>
                  <option>Claude 3</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Thermometer className="h-4 w-4 text-purple-400 mr-2" />
                <label className="text-sm text-gray-900 dark:text-white">Temperature</label>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="w-16 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-1 px-2 text-sm text-center text-gray-900 dark:text-white"
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
                  value={tokenLimit}
                  onChange={(e) => setTokenLimit(e.target.value)}
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

