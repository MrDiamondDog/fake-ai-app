export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className={props.className + " cursor-pointer border border-border hover:bg-border transition-colors rounded-lg p-2 px-4"}>
            {props.children}
        </button>
    )
}