"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("in register");
    try {
      await axios.post("https://zendenbackend.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });
      router.push("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 border border-solid rounded-md p-10">
      <h2 className="mb-4 text-2xl font-bold text-center text-white">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
        />
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
          Register
        </button>
      </form>
      <div className="text-white flex items-center justify-center gap-2 w-full">
        Already have an account?
        <Link href="/login">
          <div className="w-full px-4 py-2 text-center my-4 text-white bg-blue-500 rounded">
            <a>Login</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
