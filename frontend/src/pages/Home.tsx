import Header from "@/components/layout/Header"
import MainContent from "@/components/layout/MainContent"
import LeftSidebar from "@/components/layout/LeftSidebar"
import RightSidebar from "@/components/layout/RightSidebar"

export default function Home() {
  return (
    <div className="flex h-screen bg-black text-white">
      
      <LeftSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

