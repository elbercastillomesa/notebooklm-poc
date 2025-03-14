import { Download } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "@/assets/css/global.css"

export default function Bubble({ isBot, text, wordBinary }) {

    const bubbleClass = isBot ? "markdown-corrections self-start bg-blue-500 text-white p-3 rounded-lg max-w-full" : "self-end bg-gray-300 text-black p-3 rounded-lg max-w-full";

    const binaryToWord = () => {
        const byteCharacters = atob(wordBinary);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'SophIA_Proposal_Draft.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    return (
        < >
            <div className={bubbleClass} >
                <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
            </div >
            {wordBinary ?
                <button
                    onClick={binaryToWord}
                    className="w-60 flex items-center justify-center self-start bg-blue-500 text-white p-3 rounded-lg max-w-full hover:bg-blue-800"
                >
                    <Download size={16} strokeWidth={3} className="mr-2 h-4 w-4" />
                    <span> Download Proposal </span>
                </button>
                : null
            }
        </>
    )
};