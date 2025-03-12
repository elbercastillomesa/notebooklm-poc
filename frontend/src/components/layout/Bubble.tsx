
export default function Bubble({isBot, text}) {

    const bubbleClass = isBot ? "self-start bg-blue-500 text-white p-3 rounded-lg max-w-full" : "self-end bg-gray-300 text-black p-3 rounded-lg max-w-full";

    return (
        <div className= { bubbleClass } >
            <p>{ text }</p>
        </div >
    )
};