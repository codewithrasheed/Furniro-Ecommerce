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
                <div className="flex flex-col items-center justify-center mb-10 border border-[#C7973F] p-10 rounded-lg mx-20 mt-10">
                    <h1 className="text-3xl font-bold mb-10">Login</h1>
                    <div className="flex flex-col justify-center gap-5 items-center">
                    <form action="" className="flex flex-col gap-5 items-center">
                    <input type="email" placeholder="Enter your Email" className="outline-none border border-[#C7973F] px-9 py-3 rounded-lg" />
                    <input type="password" placeholder="Enter your Password"  className="outline-none border border-[#C7973F] px-9 py-3 rounded-lg"/>
                    <button type="submit" className="mt-2 px-4 py-2 text-white bg-[#C7973F] rounded-md w-[250px]">Sign In</button>
                    </form>
                    </div>
                    <button onClick={() => signIn("google")} className="mt-5 px-4 py-2 text-white bg-[#C7973F] rounded-md w-[250px]">Sign in With Google</button>
                <button onClick={() => signIn("github")} className=" mt-5 px-4 py-2 text-white bg-[#C7973F] rounded-md w-[250px]">Sign in With Github</button>
                </div>
            )}
        </div>
    );
}
