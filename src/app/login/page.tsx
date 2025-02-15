"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || "Invalid credentials");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-foreground">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-2xl mb-2 text-center text-black">Welcome Back</h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your credentials to access your account
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="flex items-center gap-2 input input-bordered">
            <input
              type="text"
              className="grow focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 input input-bordered">
            <input
              type="password"
              className="grow focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn w-full bg-customNavy text-white py-2 rounded-xl"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
