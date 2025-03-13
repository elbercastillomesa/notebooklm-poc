import { Lightbulb, Lock, Palette } from "lucide-react"

export default function ProposalCards() {
  const cards = [
    {
      title: "Example",
      description: "See practical examples of how the AI works",
      icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Capabilities",
      description: "Discover what the AI can do and how it enhances your experience",
      icon: <Palette className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Limitations",
      description: "Understand the boundaries and constraints of the AI system",
      icon: <Lock className="h-8 w-8 text-blue-400" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer"
        >
          <div className="mb-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">{card.icon}</div>
          <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{card.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
        </div>
      ))}
    </div>
  )
}

