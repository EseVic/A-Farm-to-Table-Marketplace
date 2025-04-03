import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home"
import { Marketplace } from "./pages/Marketplace";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { Categories } from "./pages/Categories";
import "tailwindcss/tailwind.css";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/category" element={<Categories/>} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
