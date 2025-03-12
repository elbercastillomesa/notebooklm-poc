import ProposalCards from "./ProposalCards";

export default function ContentCards() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto w-full">
            <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                Which proposal do you want to build?
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                Challenge Sofia, unlock her full potential, and craft a winning proposal
            </p>

            <ProposalCards />
        </div>
    )
};