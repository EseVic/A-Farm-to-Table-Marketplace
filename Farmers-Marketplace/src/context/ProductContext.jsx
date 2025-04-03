import { createContext, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Fresh Apples", price: 5, image: "/images/apple.jpg" },
    { id: 2, name: "Organic Tomatoes", price: 3, image: "/images/tomato.jpg" },
    { id: 3, name: "Farm Eggs", price: 7, image: "/images/eggs.jpg" },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
