
import { useState } from 'react'
import { ThemeProvider } from '/src/components/layout/ThemeProvider'
import Header from '/src/components/layout/Header'
import LeftSidebar from '/src/components/layout/LeftSidebar'
import MainContent from '/src/components/layout/MainContent'
import RightSidebar from '/src/components/layout/RightSidebar'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="sophia-theme">
      <div className="flex h-screen">
        <LeftSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App