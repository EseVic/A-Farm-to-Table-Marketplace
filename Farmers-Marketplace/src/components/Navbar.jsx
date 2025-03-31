import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Correct import

export const Navbar = () => {
  const { user, logout } = useAuth(); // ✅ Use useAuth() hook

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      
      {user ? (
        <div className="flex gap-4">
          <span>Welcome, {user.email || "User"}</span> 
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </div>
      ) : (
        <Link to="/login" className="bg-green-500 px-3 py-1 rounded">Login</Link>
      )}
    </nav>
  );
};
