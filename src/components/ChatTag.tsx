export default function ChatTag({ children, id, selected, setSelected }: 
    { id: string, selected: boolean, setSelected: (selected: string) => void } & React.PropsWithChildren
) {
    return (
        <div className={"border border-border rounded-full px-4 py-2 cursor-pointer transition-colors " + (selected ? "bg-border" : "")}
            onClick={() => setSelected(id)}
        >
            {children}
        </div>
    )
}