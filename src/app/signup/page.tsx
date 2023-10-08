"use client";
import React from "react";
import Link from "next/link";

export default function Signup() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const handelSingup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="m-8 flex items-center justify-center">
      <div className="w-fite p-6 rounded-sm shadow-sm bg-blue-100">
        <h1 className="w-6/12 pb-2 text-2xl border border-b-gray-300">
          Signup
        </h1>
        <form className="mt-6 flex flex-col gap-4" onSubmit={handelSingup}>
          <input
            className="p-3 rounded-sm"
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            className="p-3 rounded-sm"
            type="text"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="p-3 rounded-sm"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              className="font-bold bg-blue-500 text-white p-2 rounded-sm"
              type="submit"
            >
              Signup
            </button>
            <Link href="/login">
              Already have an account? <span className="font-bold">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
