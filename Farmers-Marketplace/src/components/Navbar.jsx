import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { user, loginWithGoogle, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      {user ? (
        <div className="flex gap-4">
          <span>Welcome, {user.displayName}</span>
          <button onClick={logout} className="bg-red-500 px-3 py-1">Logout</button>
        </div>
      ) : (
        <button onClick={loginWithGoogle} className="bg-green-500 px-3 py-1">
          Login
        </button>
      )}
    </nav>
  );
};