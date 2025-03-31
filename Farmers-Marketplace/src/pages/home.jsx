import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-700 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src="https://source.unsplash.com/1600x900/?farm,agriculture"
          alt="Farm"
          className="absolute w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Farmers Market Place</h1>
          <p className="mt-4 text-lg md:text-xl">
            Your trusted source for fresh and organic farm produce.
          </p>
          <Link to="/products">
            <button className="mt-6 bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition">
              Explore Products
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="p-8 md:p-16 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
         Farmers Marketplace is a platform where diverse farmers 
         showcase their products and prices, connecting them directly
        with buyers. We are dedicated to promoting fresh, organic, 
        and high-quality farm produce while supporting local farmers. 
        Our marketplace ensures transparency, fair pricing, and a 
        seamless buying experience for consumers looking for the 
        best farm-to-table products.
        </p>
      </div>
    </div>
  );
};
