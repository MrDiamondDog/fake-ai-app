import SignInButton from "@/components/SignInButton";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function LoginPage() {
    return (
        <main className="absolute top-1/2 left-1/2 -translate-1/2 bg-foreground border border-border rounded-lg p-5 flex flex-col gap-2">
            <SignInButton provider="google"><FaGoogle size={24} /> Sign in with Google</SignInButton>
            <SignInButton provider="github"><FaGithub size={24} /> Sign in with GitHub</SignInButton>
        </main>
    )
}