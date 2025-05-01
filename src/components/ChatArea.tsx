import { Message as MessageType } from "@/util/message";
import { Sparkles } from "lucide-react";
import Message from "./Message";

export default function ChatArea({ messages }: { messages: MessageType[] }) {
    return (
        <div className="flex flex-col gap-2">
            {messages.length === 0 && <Sparkles size={64} className="m-auto h-full" />}
            {messages.map((message, i) => (
                <Message data={message} key={i} />
            ))}
        </div>
    )
}