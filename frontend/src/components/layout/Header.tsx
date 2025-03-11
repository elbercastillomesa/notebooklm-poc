import { ThemeToggle } from "./ThemeToggle"
import { User } from "lucide-react"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800 dark:border-gray-800 bg-white dark:bg-black">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-black dark:text-white">
          SOPH<span className="text-blue-400">IA</span>
        </h1>
        <div className="ml-2 bg-blue-600 rounded-full w-6 h-3"></div>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="bg-blue-600 rounded-full w-10 h-5"></div>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
            <User className="text-gray-700 w-5 h-5" />
          </div>
          <span className="ml-2 text-sm text-black dark:text-white">Elber Castillo</span> 
        </div>
      </div>
    </header>
  )
}
