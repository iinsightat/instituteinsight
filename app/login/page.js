"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <button
          onClick={() => signIn("google")}
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
