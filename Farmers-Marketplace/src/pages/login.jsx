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
    <div className="min-h-screen flex bg-gray-200">
      {/* Left side - Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/signupfarmer.jpg')" }}
      ></div>

      {/* Right side - Login Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <br />
            <button
              type="submit"
              className="btn-primary w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

