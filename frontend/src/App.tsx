
import { useState, useEffect } from 'react'
import { ThemeProvider } from '/src/components/layout/ThemeProvider'
import Header from '/src/components/layout/Header'
import LeftSidebar from '/src/components/layout/LeftSidebar'
import MainContent from '/src/components/layout/MainContent'
import RightSidebar from '/src/components/layout/RightSidebar'

function App() {

  const [promptObject, setPromptObject] = useState(
    {
      prompt: "",
      model_name: "gemini-2.0-flash-001",
      creativity: 1,
      top_p: 0.95,
      max_output_tokens: 8192,
      client_name: "",
      country: "",
      currency: "",
      language: ""
    }
  )

  const [validateForm, setValidateForm] = useState(false)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="sophia-theme">
      <div className="flex h-screen">
        <LeftSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* <Header /> */}
          <div className="flex flex-1 overflow-hidden">
            <MainContent 
              promptObject={promptObject} 
              setPromptObject = {setPromptObject} 
              validateForm = {validateForm} 
              setValidateForm = {setValidateForm} 
            />
            <RightSidebar 
              promptObject={promptObject} 
              setPromptObject = {setPromptObject} 
              validateForm = {validateForm} 
              setValidateForm = {setValidateForm} 
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App