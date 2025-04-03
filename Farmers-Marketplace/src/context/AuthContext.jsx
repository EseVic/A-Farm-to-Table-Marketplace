import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig"; 
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "firebase/auth";

const AuthContext = createContext(); 
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Signup Function
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful!");
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  // ✅ Login Function
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  // ✅ Logout Function
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out.");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

