import { ThemeToggle } from "./ThemeToggle"
import { User } from "lucide-react"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2 pb-4 mb-2 border-b border-gray-800 dark:border-gray-800 bg-white dark:bg-black">
      
        <ThemeToggle />        
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
            <User className="text-gray-700 w-5 h-5" />
          </div>
          <span className="ml-2 text-sm text-black dark:text-white">Elber Castillo</span> 
        </div>
      
    </header>
  )
}
