export default function ProgressSteps() {
    const steps = [
      { id: 1, name: "Client Information", status: "current" },
      { id: 2, name: "Upload Client Brief", status: "upcoming" },
      { id: 3, name: "Select Proposal Template", status: "upcoming" },
      { id: 4, name: "Select Output Options", status: "upcoming" },
    ]
  
    return (
      <div className="py-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Progress">
            <ol className="flex items-center justify-between">
              {steps.map((step, stepIdx) => (
                <li key={step.id} className="relative flex items-center">
                  <div className="flex items-center">
                    <div
                      className={`${
                        step.status === "current" ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
                      } h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium`}
                    >
                      {step.id}
                    </div>
                    <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">{step.name}</span>
                  </div>
  
                  {stepIdx < steps.length - 1 && (
                    <div className="hidden md:block w-10 bg-gray-300 dark:bg-gray-700 h-0.5 mx-4">
                      <div
                        className="bg-blue-600 h-0.5"
                        style={{ width: step.status === "current" ? "0%" : "100%" }}
                      ></div>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    )
  }
  
  