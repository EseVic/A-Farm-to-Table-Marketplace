import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signup(email, password);
      navigate("/dashboard");  // Redirect after signup
    } catch (error) {
      setError("Signup failed. Try again.");
      console.error("Signup error:", error.message);
    }
    setLoading(false);
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
         <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
    
    {/* // <div className="min-h-screen flex items-center justify-center bg-gray-200">
    //   <div className="bg-white p-6 rounded-lg shadow-md">
    //     <h2 className="text-2xl font-bold">Sign Up</h2>
    //     {error && <p className="text-red-500">{error}</p>} */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="input-field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
           <input
            type="tel"
            placeholder="Phone Number"
            className="input-field"
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
             required
           />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};
