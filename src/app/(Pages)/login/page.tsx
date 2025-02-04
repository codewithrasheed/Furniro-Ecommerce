"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
    const { data: session } = useSession(); // ✅ Get user session

    return (
        <div>
            {session ? (
                <div className="">
                    <div className="flex gap-4 items-center">
                    <img src={session.user?.image ?? ""} alt="User Avatar" width={100} height={50} />
                    <p>Welcome, {session.user?.name}</p>
                    </div>
                    <div>
                    <button onClick={() => signOut()}>Sign Out</button>
                    </div>
                </div>
            ) : (
                <button onClick={() => signIn("github")}>Sign in With Github</button>
            )}
        </div>
    );
}
