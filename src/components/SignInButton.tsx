"use client";

import { signIn } from "next-auth/react";
import Button from "./Button";

export default function SignInButton({ provider, children }: { provider: string } & React.PropsWithChildren) {
    return (
        <Button className="flex items-center gap-2 text-lg p-3" onClick={() => signIn(provider, { redirectTo: "/chat" })}>
            {children}
        </Button>
    )
}