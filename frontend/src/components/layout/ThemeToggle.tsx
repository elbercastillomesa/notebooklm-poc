"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/layout/ThemeProvider"

export function ThemeToggle() {

  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-md border border-gray-600 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-gray-800 focus-visible:outline-none"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}

