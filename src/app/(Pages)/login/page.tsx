"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";


const Login = () => {
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    await signIn("github", { callbackUrl: "/" });
  };

  const handleSignInGoogle = async (e: any) => {
    e.preventDefault();
    await signIn("google", { callbackUrl: "/" });
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="logo" width={60} height={60} />
          </div>

          <h1 className="text-center text-2xl font-bold mb-4">
            Your Account
            <br />
            For Everything
            <br />
            Furniro
          </h1>

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-md mb-3 outline-none focus:ring-2 focus:ring-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-md mb-3 outline-none focus:ring-2 focus:ring-gray-300"
          />

          <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" /> Keep me signed
              in
            </label>
            <a href="#" className="text-gray-500 hover:underline">
              Forgotten your password?
            </a>
          </div>

          <p className="text-center text-sm text-gray-600 mb-4">
            By Logging in, you agree to {"'Furniro's"}{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Terms of Use
            </Link>
          </p>

          <button className="w-full bg-[#C7973F] text-white py-3 rounded-md hover:bg-[#a67c2f]">
            SIGN IN
          </button>
          <button
            onClick={handleSignInGoogle}
            className="w-full bg-gray-800 text-white py-3 rounded-md mt-3 hover:bg-gray-700"
          >
            SIGN IN WITH GOOGLE
          </button>
          <button
            onClick={handleSignIn}
            className="w-full bg-gray-800 text-white py-3 rounded-md mt-3 hover:bg-gray-700"
          >
            SIGN IN WITH GITHUB
          </button>

          <p className="text-center text-sm mt-4">
            Not a Member?{" "}
            <Link href="/signup" className="underline">
              Join Us.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;