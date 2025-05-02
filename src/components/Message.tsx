import { Message as MessageType } from "@/util/message"

export default function Message({ data }: { data: MessageType }) {
    return (
        <div className={"p-3 max-w-3/4 bg-foreground rounded-lg border text-wrap wrap-anywhere border-border " + 
        (data.context === "user" ? "ml-auto" : "mr-auto")}>
            {data.content}
        </div>
    )
}