export type Message = {
    context: "user" | "assistant" | "system";
    content: string;
    tag: string;
}