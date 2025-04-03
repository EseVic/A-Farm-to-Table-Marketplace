// import React from "react";
// import { Link } from "react-router-dom";


// export const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-700 text-white">
//       {/* Hero Section */}
//       <div className="relative w-full h-[80vh] flex items-center justify-center">
//         {/* <img
//           src={farming}
//           alt="Farm"
//           className="absolute w-full h-full object-cover brightness-75"
//         /> */}
//         {/* <img src="/assets/farming.jpg" alt="Farm" /> */}
//         <img src="/farming.jpg" alt="Farm" />
//         <div className="relative z-10 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold">Welcome to Farmers Market Place</h1>
//           <p className="mt-4 text-lg md:text-xl">
//             Your trusted source for fresh and organic farm produce.
//           </p>
//            <div className="mt-4">
//         <Link to="/signup">
//           <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
//             Sign Up
//           </button>
//         </Link>
//         </div>
//           <Link to="/products">
//             <button className="mt-6 bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition">
//               Explore Products
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="p-8 md:p-16 bg-white text-gray-800">
//         <h2 className="text-3xl font-bold text-center">About Us</h2>
//         <p className="mt-4 text-center max-w-2xl mx-auto">
//          Farmers Marketplace is a platform where diverse farmers 
//          showcase their products and prices, connecting them directly
//         with buyers. We are dedicated to promoting fresh, organic, 
//         and high-quality farm produce while supporting local farmers. 
//         Our marketplace ensures transparency, fair pricing, and a 
//         seamless buying experience for consumers looking for the 
//         best farm-to-table products.
//         </p>
//       </div>
//     </div>
//   );
// };


import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-700 text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/farming.jpg')" }} 
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Farmers Market Place
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Your trusted source for fresh and organic farm produce.
          </p>

          <div className="mt-6 space-x-4">
            <Link to="/signup">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                Sign Up
              </button>
            </Link>

            <Link to="/products">
              <button className="bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="p-8 md:p-16 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Farmers Marketplace is a platform where diverse farmers showcase
          their products and prices, connecting them directly with buyers.
          We are dedicated to promoting fresh, organic, and high-quality
          farm produce while supporting local farmers. Our marketplace
          ensures transparency, fair pricing, and a seamless buying
          experience for consumers looking for the best farm-to-table
          products.
        </p>
      </div>
    </div>
  );
};

