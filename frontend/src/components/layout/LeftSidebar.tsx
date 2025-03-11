import { BarChart2, FileText, Grid, Home, LayoutGrid, LogOut, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

export default function LeftSidebar() {
  return (
    <div className="w-60 bg-gray-100 dark:bg-black border-r border-gray-300 dark:border-gray-800 flex flex-col">
      <div className="p-4 border-b border-blue-500">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-black dark:text-white">
              SOPH<span className="text-blue-400">IA</span>
            </span>
            <div className="ml-2 bg-blue-600 rounded-full w-6 h-3"></div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 group"
            >
              <Home className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span>Main Menu</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 group"
            >
              <LayoutGrid className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span>Templates</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 group"
            >
              <Grid className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 group"
            >
              <BarChart2 className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span>Analytics</span>
            </Link>
          </li>
        </ul>

        <div className="mt-4">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
            <Plus className="mr-2 h-4 w-4" />
            <span>New proposal</span>
          </button>
        </div>

        <div className="mt-6">
          <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Recent Proposal
          </h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <FileText className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span>Acme Corp Proposal</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
            <span className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></span>
            Client #1
          </h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <FileText className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span>Acme Corp Proposal</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <FileText className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span>TechSolutions Brief</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-300 dark:border-gray-800">
        <button className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 w-full">
          <Trash2 className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span>Clear proposal</span>
        </button>
        <button className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 w-full mt-1">
          <LogOut className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  )
}

