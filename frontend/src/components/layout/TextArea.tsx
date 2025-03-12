import Bubble from "./Bubble";

export default function TextArea() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto w-full">
            <div className="w-full h-full flex flex-col justify-start">
                <div className="flex flex-col space-y-4">
                    <Bubble isBot text="Sure, what seems to be the issue?" />
                    <Bubble text="React is really confusing." />
                </div>
            </div>
        </div>
    )
};