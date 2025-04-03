import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid email or password.");
      console.error("Login error:", error.message);
    }
    setLoading(false);
  };

  return (
    //  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
    //    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
    //      <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
    //       {error && <p className="text-red-500 text-center">{error}</p>}

     <div className="min-h-screen flex items-center justify-center bg-gray-200-to-br from-500 to purple-600 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500">{error}</p>} 
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          /> <br /> <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          /> <br /><br />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
