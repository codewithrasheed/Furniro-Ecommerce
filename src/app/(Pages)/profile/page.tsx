"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirect if not logged in
    }
  }, [status, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <Image
            src={session?.user?.image ?? "/default-avatar.png"}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full border border-gray-300 shadow-sm"
          />
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome, {session?.user?.name}
        </h2>
        <p className="text-gray-500">{session?.user?.email}</p>

        {/* Sign Out Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
