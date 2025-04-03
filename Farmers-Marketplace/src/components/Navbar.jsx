import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between items-center">
      {/* Logo or Branding */}
      <Link to="/" className="text-lg font-bold">Farmers Marketplace</Link>

      {/* Navigation Links */}
      <div className="flex gap-4">
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/cart">Cart</Link>
      </div>

      {/* Authentication Buttons */}
      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">Login</Link>
            <Link to="/signup" className="bg-yellow-500 px-3 py-1 rounded">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};
