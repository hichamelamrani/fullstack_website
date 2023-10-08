"use client";
import Link from "next/link";

function page() {
  return (
    <div className="m-8 flex items-center justify-center">
      <div className="w-fite p-6 rounded-sm shadow-sm bg-blue-100">
        <h1 className="w-6/12 pb-2 text-2xl border border-b-gray-300">Login</h1>
        <form className="mt-6 flex flex-col gap-4">
          <input
            className="p-3 rounded-sm"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-3 rounded-sm"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              className="font-bold bg-blue-500 text-white p-2 rounded-sm"
              type="submit"
            >
              Signup
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
