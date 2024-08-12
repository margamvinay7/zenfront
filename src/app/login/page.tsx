"use client";
import { useState } from "react";
import { useAuth } from "../context/authContex";
import Link from "next/link";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-20 w-96 border border-solid p-10 rounded-md">
      <h2 className="mb-4 text-2xl font-bold text-center text-white">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded"
        >
          Login
        </button>
      </form>
      <div className="text-white flex items-center justify-center gap-2 w-full">
        Already have an account?
        <Link href="/register">
          <div className="w-full px-4 py-2 text-center my-4 text-white bg-blue-500 rounded">
            <a>Register</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
