"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import Divider from "./Divider";

export default function NotAuthenticated() {
    const router = useRouter();
    
    return (
        <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-foreground border border-border rounded-lg p-5">
            <h1>Not logged in</h1>
            <Divider />
            <p>You are not logged in.</p>
            <div className="flex gap-2 justify-end mt-2">
                <Button onClick={() => router.back()}>Back</Button>
                <Button onClick={() => router.push("/login")}>Log in</Button>
            </div>
        </div>
    )
}