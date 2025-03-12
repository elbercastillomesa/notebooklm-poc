
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
      system_instruction: "Eres una persona muy importante en el desarrollo de propuestas técnicas, Director del área de Inteligencia Artificial, en donde tu enfoque es poder traer más clientes a la empresa.",
      data_store_id: "projects/latam-gcp-project/locations/global/collections/default_collection/dataStores/sofia-datos-nisum_1738911346749_gcs_store",
      project: "latam-gcp-project",
      location: "us-central1",
      model_name: "gemini-2.0-flash-001",
      temperature: 1,
      top_p: 0.95,
      max_output_tokens: 500,
      nombre_cliente: "",
      pais: "",
      moneda: ""
    }
  )

  useEffect(() => {
    console.log(promptObject)

  }, [promptObject])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="sophia-theme">
      <div className="flex h-screen">
        <LeftSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <MainContent promptObject={promptObject} setPromptObject = {setPromptObject} />
            <RightSidebar promptObject={promptObject} setPromptObject = {setPromptObject} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App