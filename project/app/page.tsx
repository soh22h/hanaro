"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-lg font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-3xl">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">로그인</h2>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 block w-full rounded-lg border border-gray-200 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 block w-full rounded-lg border border-gray-200 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-medium py-3 rounded-lg shadow hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Sign in
            </button>

            {/* Error Message */}
            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          </form>

          {/* Alternative Sign-In Methods */}
          <div className="mt-8 text-center">
            <span className="text-sm text-gray-500">Or continue with</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <button
              onClick={() => signIn("google")}
              className="flex justify-center items-center bg-white border border-gray-300 text-black px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="flex justify-center items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default App;
