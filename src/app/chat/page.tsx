"use client";

import Button from "@/components/Button";
import ChatArea from "@/components/ChatArea";
import ChatTag from "@/components/ChatTag";
import NotAuthenticated from "@/components/NotAuthenticated";
import { Message } from "@/util/message";
import { ArrowUp } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ChatPage() {
    const { data: session } = useSession()

    const [chatTag, setChatTag] = useState("answer");
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    if (!session?.user) return <NotAuthenticated />

    async function sendChat() {
        setMessages([...messages, {
            context: "user",
            content: input,
            tag: chatTag
        }]);

        setInput("");
    }
    
    return (
        <main className="bg-background p-5 h-screen">
            <div className="flex flex-col gap-5 h-full justify-between items-center">
                <div className="w-1/2 overflow-scroll">
                    <ChatArea messages={messages} />
                </div>
                <div className="w-1/2 bg-foreground border border-border rounded-lg flex flex-col p-5">
                    <textarea
                        className="resize-none max-h-[200px] outline-0"
                        placeholder="ask yo questions" 
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendChat();
                            }
                        }}
                        value={input}
                    />
                    <div className="pt-4 flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2">
                            <ChatTag id={"answer"} selected={chatTag === "answer"} setSelected={setChatTag}>Answer</ChatTag>
                            <ChatTag id={"search"} selected={chatTag === "search"} setSelected={setChatTag}>Search</ChatTag>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Button className="!rounded-full">
                                <ArrowUp />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}