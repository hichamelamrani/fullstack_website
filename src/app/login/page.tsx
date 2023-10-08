import React, { useState, useRef } from "react";
import Link from "next/link";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleUsernameChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, username: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
  };

  return (
    <div className="m-8 flex items-center justify-center">
      <div className="w-fite p-6 rounded-sm shadow-sm bg-blue-100">
        <h1 className="w-6/12 pb-2 text-2xl border border-b-gray-300">Login</h1>
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            ref={usernameRef}
            className="p-3 rounded-sm"
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={handleUsernameChange}
          />

          <input
            ref={passwordRef}
            className="p-3 rounded-sm"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handlePasswordChange}
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              className="font-bold bg-blue-500 text-white p-2 rounded-sm"
              type="submit"
            >
              Login
            </button>
            You don't have an account?
            <Link className="font-bold" href="/signup">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
