import Bubble from "./Bubble";
import { BeatLoader } from "react-spinners";

export default function TextArea( { chatHistory, isLoading} ) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto w-full">
            <div className="w-full h-full flex flex-col justify-start">
                <div className="flex flex-col space-y-4">
                    {chatHistory.map((message, index) => (
                        <Bubble key={index} isBot={message.isBot} text={message.text} isLoading={isLoading}/>
                    ))}
                    { isLoading ? 
                        <div className="self-start bg-blue-500 text-white p-3 rounded-lg max-w-full" >
                            <BeatLoader color="white"/>
                        </div >
                    : null }
                </div>
            </div>
        </div>
    )
};