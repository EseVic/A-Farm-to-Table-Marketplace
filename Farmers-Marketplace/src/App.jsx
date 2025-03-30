// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Products } from "./components/Products";
// import { Cart } from "./components/Cart";
// import { Checkout } from "./components/Checkout";
// import { Navbar } from "./components/Navbar";
// import { AuthProvider } from "./context/AuthContext";
// import "tailwindcss/tailwind.css";

// const App = () => {
//   return (
// 	<>
// 	  <AuthProvider>
//       <Router>
//         <Navbar />
//         <div className="container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<Products />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
// 	</>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./components/login";
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
			<Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
